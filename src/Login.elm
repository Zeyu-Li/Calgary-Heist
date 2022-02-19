module Login exposing (Msg(..), main, update, view)

import Browser
import Html exposing (Html, button, div, text)
import Html.Events exposing (onClick)


main : Program () Int Msg
main =
    Browser.sandbox
        { init = 0
        , view = view
        , update = update
        }


type Msg
    = Increment
    | Decrement


update : Msg -> number -> number
update msg model =
    case msg of
        Increment ->
            model + 1

        Decrement ->
            model - 1


view : Int -> Html Msg
view model =
    div []
        [ button [ onClick Decrement ] [ text "-" ]
        , div [] [ text (String.fromInt model) ]
        , button [ onClick Increment ] [ text "+" ]
        ]
