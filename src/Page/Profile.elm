module Page.Profile exposing (Model, Msg, init, update, view)

import Html exposing (Html, button, div, h1, h2, p, text)
import Html.Attributes exposing (..)
import Page.Header as Header



-- init


type alias Model =
    Int


init : Model
init =
    0



-- UPDATE


type Msg
    = Increment
    | Decrement


update : Msg -> Model -> Model
update msg model =
    case msg of
        Increment ->
            model + 1

        Decrement ->
            model - 1


view : Model -> List (Html msg)
view model =
    [ Header.view
    , div [ class "profile center" ]
        [ div [ class "profile__buttons" ]
            [ h1 [] [ text "Your profile" ]
            , div [] [ button [ class " button button--black" ] [ text "Create Game" ] ]
            ]
        , div [ class "profile__buttons" ]
            [ p [] [ text ("⭐ " ++ String.fromInt model ++ " stars") ]
            , button [ class " button button--blue" ] [ text "See leaderboard" ]
            ]
        , div [ class "profile__table" ] [ h2 [] [ text "Previously created " ] ]
        ]
    ]
