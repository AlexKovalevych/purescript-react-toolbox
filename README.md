# purescript-react-toolbox
React toolbox bindings for purescript

## Installing

bower install https://github.com/AlexKovalevych/purescript-react-toolbox.git

## Usage

```purescript
import ReactToolbox as RT
import React.DOM.Props as P

...
RT.navigation [ P.unsafeMkProps "type" "vertical" ] [
    RT.link [ P.href "#", P.label "Inbox", P.icon "inbox" ] [],
    RT.link [ P.href "#", P.label "Profile", P.icon "person", P.unsafeMkProps "active" true ] []
]
...

```
