module Main exposing (..)

import Browser
import Html exposing (Html, div, h1, h2, img, pre, text)
import Html.Attributes exposing (class, src)



---- MODEL ----


type alias Model =
    {}


init : ( Model, Cmd Msg )
init =
    ( {}, Cmd.none )



---- UPDATE ----


type Msg
    = NoOp


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    ( model, Cmd.none )



---- VIEW ----


view : Model -> Html Msg
view model =
    div [ class "hero" ]
        [ div [ class "hero__entry" ] [ h1 [] [ pre [] [ text "Study with your \nfriends" ] ], h2 [] [ pre [] [ text "Create your own flash cards and play with \nyour friends" ] ] ]
        , img [ src "/model.gif", Html.Attributes.alt "3D model", class "hero__img" ] []
        ]



---- PROGRAM ----


main : Program () Model Msg
main =
    Browser.element
        { view = view
        , init = \_ -> init
        , update = update
        , subscriptions = always Sub.none
        }
