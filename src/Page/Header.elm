module Page.Header exposing (view)

import Html exposing (Html, a, div, p, text)
import Html.Attributes exposing (..)


view : Html msg
view =
    div [ class "header" ]
        [ p [] [ text "Study Buddy" ]
        , a [] [ text "Login" ]
        ]
