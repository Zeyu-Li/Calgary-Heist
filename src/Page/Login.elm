module Page.Login exposing (view)

import Html exposing (Html, button, div, text)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)


view : List (Html msg)
view =
    [ div [] [ text "Login" ] ]
