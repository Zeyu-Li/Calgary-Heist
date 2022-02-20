module ScoreTable exposing (Model, PlayerScores, init, playerName, playerNames, updateScores, calculateScores, view, topPlayer)

import Array exposing (Array)
import Html exposing (Html, div, table, tbody, td, text, th, thead, tr) 
import Html.Attributes exposing (class)



-- MODEL


type alias Model =
    Array PlayerScores


type alias PlayerScores =
    { name : String
    , scores : List Int
    }


init : List String -> Model
init players =
    Array.fromList (List.map (\player -> { name = player, scores = [] }) players)



calculateScores : List Int -> Int -> List Int
calculateScores scores newScore =
    List.map (\score -> score + newScore) scores
    





-- UPDATE


updateScores : Model -> Int -> Int -> Model
updateScores scores player newScore =
    let
        currentPlayerScores =
            Array.get player scores
    in
    case currentPlayerScores of
        Just someScores ->
            Array.set player { someScores | scores = calculateScores someScores.scores newScore } scores

        Nothing ->
            scores


topPlayer : Model -> Maybe String
topPlayer scores =
    scores
        |> Array.filter (\x -> List.sum x.scores == 80)
        |> playerNames
        |> List.head


playerNames : Model -> List String
playerNames scores =
    scores
        |> Array.toList
        |> List.map (\player -> player.name)


playerName : PlayerScores -> String
playerName scores =
    scores.name


playerScores : Model -> List Int
playerScores scores =
    scores
        |> Array.toList
        |> List.map (\player -> player.scores)
        |> List.map List.sum


getScores : PlayerScores -> List Int
getScores model =
    model.scores


getHeads : List (List Int) -> List (Maybe Int)
getHeads model =
    List.map List.head model


getTails : List (List Int) -> List (List Int)
getTails scores =
    List.map emptyTails scores


emptyTails : List Int -> List Int
emptyTails list =
    case list of
        _ :: xs ->
            xs

        _ ->
            []



-- VIEW


view : Model -> Html msg
view model =
    div [ class "col s12" ]
        [ table [ class "LeaderBoard", class "centered" ]
            [ thead [] [ playerNamesRow model ]
            , tbody [] (scoreTable model)
            ]
        ]


playerNamesRow : Model -> Html msg
playerNamesRow model =
    tr [ class "player-names" ]
        (List.map (\name -> th [ class "player-name" ] [ text name ]) (playerNames model))


scoreTable : Model -> List (Html msg)
scoreTable model =
    let
        scores =
            model
                |> Array.toList
                |> List.map getScores
                |> List.map List.reverse
    in
    scoreTableRows scores ++ [ playerScoreTotals model ]


scoreTableRows : List (List Int) -> List (Html msg)
scoreTableRows model =
    let
        heads =
            getHeads model
    in
    if List.member Nothing heads then
        tr [ class "player-scores" ] (scoreCells heads) :: []

    else
        tr [ class "player-scores" ] (scoreCells heads) :: scoreTableRows (getTails model)


scoreCells : List (Maybe Int) -> List (Html msg)
scoreCells scores =
    List.map scoreCell scores


scoreCell : Maybe Int -> Html msg
scoreCell score =
    case score of
        Just num ->
            td [ class "score", class (getColor num) ] [ text (String.fromInt num) ]

        Nothing ->
            td [ class "score", class "grey-text" ] [ text "0" ]




playerScoreTotals : Model -> Html msg
playerScoreTotals model =
    tr [ class "score-totals" ]
        (List.map (\total -> td [ class "score-total" ] [ text total ]) (List.map String.fromInt (playerScores model)))