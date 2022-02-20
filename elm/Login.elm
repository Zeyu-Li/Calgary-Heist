module Home exposing (..)

import Browser
import Html exposing (Html, a, button, div, h1, h2, h3, h4, pre, text, video, img)
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
    div [ class "fullscreen" ] [ div [ class "card" ]
        [ h1 [] [ text "Login" ]
        , img [ src "/btn_google_signin.png" ] []
    ] ]
