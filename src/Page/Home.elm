module Page.Home exposing (view)

import Html exposing (Html, button, div, h1, h2, h3, pre, text, video)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)


view : List (Html msg)
view =
    [ div [ class "hero" ]
        [ div [ class "hero__entry" ]
            [ h1 [] [ pre [] [ text "Study with your \nfriends" ] ]
            , h2 [] [ pre [] [ text "Create your own flash cards and play with \nyour friends" ] ]
            , div [ class "hero__entry__bottom" ] [ button [ class "button button--blue hero__entry__bottom__button" ] [ text "Try now" ], h3 [ class "hero__entry__bottom__text" ] [ text "for Free" ] ]
            ]
        , video [ src "/model.webm", Html.Attributes.alt "3D model", class "hero__video", autoplay True, Html.Attributes.loop True, Html.Attributes.attribute "muted" "" ] []
        ]
    ]
