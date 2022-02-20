module Home exposing (..)

import Browser
import Html exposing (Html, a, button, div, h1, h2, h3, h4, pre, text, video)
import Html.Attributes exposing (..)


main : Program Flags Model Msg
main =
    Browser.element { init = init, subscriptions = subscriptions, update = update, view = view }


type alias Model =
    {}

type Msg
    = NoOp

type alias Flags =
    {}

init: Flags -> ( Model, Cmd msg )
init flags =
    ({}, Cmd.none)


update : Msg -> Model -> ( Model, Cmd Msg)
update msg model =
    (model, Cmd.none)


subscriptions : Model -> Sub msg
subscriptions _ =
    Sub.none


view : Model -> Html msg
view model =
    div [] [ div [ class "hero center", id "hero" ]
        [ div [ class "hero__entry" ]
            [ h1 [] [ pre [] [ text "Study with your \nfriends" ] ]
            , h2 [] [ pre [] [ text "Create your own flash cards and play with \nyour friends" ] ]
            , div [ class "hero__entry__bottom" ] [ a [ href "/game", class "button button--blue hero__entry__bottom__button" ] [ text "Try now" ], h3 [ class "hero__entry__bottom__text" ] [ text "for Free" ] ]
            ]
        , video [ src "/model.webm", Html.Attributes.alt "3D model", class "hero__video", autoplay True, Html.Attributes.loop True, Html.Attributes.attribute "muted" "" ] []
        ]
    , div [ class "about center", id "about" ]
        [ h4 [] [ pre [] [ text "Earn points\nfor winning" ] ]
        , h2 [] [ pre [] [ text "See yourself on the leaderboard" ] ]
        , button [ class "button button--blue hero__entry__bottom__button" ] [ text "Earn Rewards" ]
        ]
    , div [ class "about2 center", id "about2" ]
        [ h4 [] [ pre [] [ text "Simple to use interface\n& open source" ] ]
        , h2 [] [ pre [] [ text "Learn more by clicking on the button below " ] ]
        , a [ href "https://github.com/Zeyu-Li/Calgary-Heist", target "_blank" ] [ button [ class "button button--black hero__entry__bottom__button" ] [ text "Source code" ] ]
        ]
    ]
