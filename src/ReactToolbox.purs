module ReactToolbox where

import React.DOM.Props
import React (ReactElement)

foreign import appBar :: Array Props -> Array ReactElement -> ReactElement

foreign import appBarNoProps :: Array ReactElement -> ReactElement

foreign import avatar :: Array Props -> Array ReactElement -> ReactElement

foreign import avatarNoProps :: Array ReactElement -> ReactElement

foreign import autocomplete :: Array Props -> ReactElement

foreign import button :: Array Props -> Array ReactElement -> ReactElement

foreign import buttonNoProps :: Array ReactElement -> ReactElement

foreign import iconButton :: Array Props -> Array ReactElement -> ReactElement

foreign import iconButtonNoProps :: Array ReactElement -> ReactElement

foreign import card :: Array Props -> Array ReactElement -> ReactElement

foreign import cardNoProps :: Array ReactElement -> ReactElement

foreign import cardMedia :: Array Props -> Array ReactElement -> ReactElement

foreign import cardMediaNoProps :: Array ReactElement -> ReactElement

foreign import cardTitle :: Array Props -> Array ReactElement -> ReactElement

foreign import cardTitleNoProps :: Array ReactElement -> ReactElement

foreign import cardText :: Array Props -> Array ReactElement -> ReactElement

foreign import cardTextNoProps :: Array ReactElement -> ReactElement

foreign import cardActions :: Array Props -> Array ReactElement -> ReactElement

foreign import cardActionsNoProps :: Array ReactElement -> ReactElement

foreign import chip :: Array Props -> Array ReactElement -> ReactElement

foreign import chipNoProps :: Array ReactElement -> ReactElement

foreign import checkbox :: Array Props -> ReactElement

foreign import datePicker :: Array Props -> ReactElement

foreign import dialog :: Array Props -> Array ReactElement -> ReactElement

foreign import dialogNoProps :: Array ReactElement -> ReactElement

foreign import drawer :: Array Props -> Array ReactElement -> ReactElement

foreign import drawerNoProps :: Array ReactElement -> ReactElement

foreign import dropdown :: Array Props -> ReactElement

foreign import fontIcon :: Array Props -> Array ReactElement -> ReactElement

foreign import fontIconNoProps :: Array ReactElement -> ReactElement

foreign import input :: Array Props -> Array ReactElement -> ReactElement

foreign import inputNoProps :: Array ReactElement -> ReactElement

foreign import form :: Array Props -> Array ReactElement -> ReactElement

foreign import formNoProps :: Array ReactElement -> ReactElement

foreign import layout :: Array Props -> Array ReactElement -> ReactElement

foreign import layoutNoProps :: Array ReactElement -> ReactElement

foreign import navDrawer :: Array Props -> Array ReactElement -> ReactElement

foreign import navDrawerNoProps :: Array ReactElement -> ReactElement

foreign import panel :: Array Props -> Array ReactElement -> ReactElement

foreign import panelNoProps :: Array ReactElement -> ReactElement

foreign import sidebar :: Array Props -> Array ReactElement -> ReactElement

foreign import sidebarNoProps :: Array ReactElement -> ReactElement

foreign import link :: Array Props -> Array ReactElement -> ReactElement

foreign import linkNoProps :: Array ReactElement -> ReactElement

foreign import list :: Array Props -> Array ReactElement -> ReactElement

foreign import listNoProps :: Array ReactElement -> ReactElement

foreign import listItem :: Array Props -> Array ReactElement -> ReactElement

foreign import listItemNoProps :: Array ReactElement -> ReactElement

foreign import listDivider :: Array Props -> ReactElement

foreign import listCheckbox :: Array Props -> ReactElement

foreign import listSubHeader :: Array Props -> ReactElement

foreign import listItemText :: Array Props -> ReactElement

foreign import listItemContent :: Array Props -> Array ReactElement -> ReactElement

foreign import listItemContentNoProps :: Array ReactElement -> ReactElement

foreign import menu :: Array Props -> Array ReactElement -> ReactElement

foreign import menuNoProps :: Array ReactElement -> ReactElement

foreign import menuItem :: Array Props -> Array ReactElement -> ReactElement

foreign import menuItemNoProps :: Array ReactElement -> ReactElement

foreign import menuDivider :: ReactElement

foreign import iconMenu :: Array Props -> Array ReactElement -> ReactElement

foreign import iconMenuNoProps :: Array ReactElement -> ReactElement

foreign import navigation :: Array Props -> Array ReactElement -> ReactElement

foreign import navigationNoProps :: Array Props -> Array ReactElement -> ReactElement

foreign import overlay :: Array Props -> Array ReactElement -> ReactElement

foreign import overlayNoProps :: Array ReactElement -> ReactElement

foreign import progressBar :: Array Props -> ReactElement

foreign import radioButton :: Array Props -> ReactElement

foreign import radioGroup :: Array Props -> Array ReactElement -> ReactElement

foreign import radioGroupNoProps :: Array ReactElement -> ReactElement

foreign import ripple :: Array Props -> ReactElement -> ReactElement

foreign import rippleNoProps :: ReactElement -> ReactElement

foreign import slider :: Array Props -> ReactElement

foreign import snackbar :: Array Props -> ReactElement

foreign import switch :: Array Props -> ReactElement

foreign import table :: Array Props -> ReactElement

foreign import tab :: Array Props -> Array ReactElement -> ReactElement

foreign import tabNoProps :: Array ReactElement -> ReactElement

foreign import timePicker :: Array Props -> ReactElement

foreign import tooltip :: Array Props -> Array ReactElement -> ReactElement

foreign import tooltipNoProps :: Array ReactElement -> ReactElement
