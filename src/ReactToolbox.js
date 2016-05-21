'use strict';

// module ReactToolbox

var convertProps = function(props, children) {
    var preparedProps = {};
    for (var i in props) {
        for (var field in props[i]) {
            preparedProps[field] = props[i][field];
        }
    }
    if (children && children.length == 1) {
        children = children[0];
    }
    preparedProps.children = children;
    return preparedProps;
};

var React = require('React');

var AppBar = require('react-toolbox').AppBar;
var appBar = function(props) {
    return function(children) {
        return React.createElement(AppBar, convertProps(props, children));
    };
};
var appBarNoProps = function(children) {
    return React.createElement(AppBar, convertProps([], children));
};

var Autocomplete = require('react-toolbox').Autocomplete;
var autocomplete = function(props) {
    return React.createElement(Autocomplete, convertProps(props));
};

var Avatar = require('react-toolbox').Avatar;
var avatar = function(props) {
    return function(children) {
        return React.createElement(Avatar, convertProps(props, children));
    };
};
var avatarNoProps = function(children) {
    return React.createElement(Avatar, convertProps([], children));
};

var Button = require('react-toolbox').Button;
var button = function(props) {
    return function(children) {
        return React.createElement(Button, convertProps(props, children));
    };
};
var buttonNoProps = function(children) {
    return React.createElement(Button, convertProps([], children));
};

var IconButton = require('react-toolbox').IconButton;
var iconButton = function(props) {
    return function(children) {
        return React.createElement(IconButton, convertProps(props, children));
    };
};
var iconButtonNoProps = function(children) {
    return React.createElement(IconButton, convertProps([], children));
};

var Card = require('react-toolbox').Card;
var card = function(props) {
    return function(children) {
        return React.createElement(Card, convertProps(props, children));
    };
};
var cardNoProps = function(children) {
    return React.createElement(Card, convertProps([], children));
};

var CardMedia = require('react-toolbox').CardMedia;
var cardMedia = function(props) {
    return function(children) {
        return React.createElement(CardMedia, convertProps(props, children));
    };
};
var cardMediaNoProps = function(children) {
    return React.createElement(CardMedia, convertProps([], children));
};

var CardTitle = require('react-toolbox').CardTitle;
var cardTitle = function(props) {
    return function (children) {
        return React.createElement(CardTitle, convertProps(props, children));
    };
};
var cardTitleNoProps = function(children) {
    return React.createElement(CardTitle, convertProps([], children));
};

var CardText = require('react-toolbox').CardText;
var cardText = function(props) {
    return function(children) {
        return React.createElement(CardText, convertProps(props, children));
    };
};
var cardTextNoProps = function(children) {
    return React.createElement(CardText, convertProps([], children));
};

var CardActions = require('react-toolbox').CardActions;
var cardActions = function(props) {
    return function(children) {
        return React.createElement(CardActions, convertProps(props, children));
    };
};
var cardActionsNoProps = function(children) {
    return React.createElement(CardActions, convertProps([], children));
};

var Checkbox = require('react-toolbox').Checkbox;
var checkbox = function(props) {
    return React.createElement(Checkbox, convertProps(props));
};

var Chip = require('react-toolbox').Chip;
var chip = function(props) {
    return function(children) {
        return React.createElement(Chip, convertProps(props, children));
    };
};
var chipNoProps = function(children) {
    return React.createElement(Chip, convertProps([], children));
};

var DatePicker = require('react-toolbox').DatePicker;
var datePicker = function(props) {
    return React.createElement(DatePicker, convertProps(props));
};

var Dialog = require('react-toolbox').Dialog;
var dialog = function(props) {
    return function (children) {
        return React.createElement(Dialog, convertProps(props, children));
    };
};
var dialogNoProps = function(children) {
    return React.createElement(Dialog, convertProps([], children));
};

var Drawer = require('react-toolbox').Drawer;
var drawer = function(props) {
    return function(children) {
        return React.createElement(Drawer, convertProps(props, children));
    };
};
var drawerNoProps = function(children) {
    return React.createElement(Drawer, convertProps([], children));
};

var Dropdown = require('react-toolbox').Dropdown;
var dropdown = function(props) {
    return React.createElement(Dropdown, convertProps(props));
};

var FontIcon = require('react-toolbox').FontIcon;
var fontIcon = function(props) {
    return function(children) {
        return React.createElement(FontIcon, convertProps(props, children));
    };
};
var fontIconNoProps = function(children) {
    return React.createElement(FontIcon, convertProps([], children));
};

var Form = require('react-toolbox').Form;
var form = function(props) {
    return function(children) {
        return React.createElement(Form, convertProps(props, children));
    };
};
var formNoProps = function(children) {
    return React.createElement(Form, convertProps([], children));
};

var Input = require('react-toolbox').Input;
var input = function(props) {
    return function(children) {
        return React.createElement(Input, convertProps(props, children));
    };
};
var inputNoProps = function(children) {
    return React.createElement(Input, convertProps([], children));
};

var Layout = require('react-toolbox').Layout;
var layout = function(props) {
    return function(children) {
        return React.createElement(Layout, convertProps(props, children));
    };
};
var layoutNoProps = function(children) {
    return React.createElement(Layout, convertProps([], children));
};

var NavDrawer = require('react-toolbox').NavDrawer;
var navDrawer = function(props) {
    return function(children) {
        return React.createElement(NavDrawer, convertProps(props, children));
    };
};
var navDrawerNoProps = function(children) {
    return React.createElement(NavDrawer, convertProps([], children));
};

var Panel = require('react-toolbox').Panel;
var panel = function(props) {
    return function(children) {
        return React.createElement(Panel, convertProps(props, children));
    };
};
var panelNoProps = function(children) {
    return React.createElement(Panel, convertProps([], children));
};

var Sidebar = require('react-toolbox').Sidebar;
var sidebar = function(props) {
    return function(children) {
        return React.createElement(Sidebar, convertProps(props, children));
    };
};
var sidebarNoProps = function(children) {
    return React.createElement(Sidebar, convertProps([], children));
};

var Link = require('react-toolbox').Link;
var link = function(props) {
    return function(children) {
        return React.createElement(Link, convertProps(props, children));
    };
};
var linkNoProps = function(children) {
    return React.createElement(Link, convertProps([], children));
};

var List = require('react-toolbox').List;
var list = function(props) {
    return function(children) {
        return React.createElement(List, convertProps(props, children));
    };
};
var listNoProps = function(children) {
    return React.createElement(List, convertProps([], children));
};

var ListItem = require('react-toolbox').ListItem;
var listItem = function(props) {
    return function(children) {
        return React.createElement(ListItem, convertProps(props, children));
    };
};
var listItemNoProps = function(children) {
    return React.createElement(ListItem, convertProps([], children));
};

var ListDivider = require('react-toolbox').ListDivider;
var listDivider = function(props) {
    return React.createElement(ListDivider, convertProps(props));
};

var ListCheckbox = require('react-toolbox').ListCheckbox;
var listCheckbox = function(props) {
    return React.createElement(ListCheckbox, convertProps(props));
};

var ListSubHeader = require('react-toolbox').ListSubHeader;
var listSubHeader = function(props) {
    return React.createElement(ListSubHeader, convertProps(props));
};

var ListItemText = require('react-toolbox').ListItemText;
var listItemText = function(props) {
    return React.createElement(ListItemText, convertProps(props));
};

var ListItemContent = require('react-toolbox').ListItemContent;
var listItemContent = function(props) {
    return function(children) {
        return React.createElement(ListItemContent, convertProps(props, children));
    };
};
var listItemContentNoProps = function(children) {
    return React.createElement(ListItemContent, convertProps([], children));
};

var Menu = require('react-toolbox').Menu;
var menu = function(props) {
    return function(children) {
        return React.createElement(Menu, convertProps(props, children));
    };
};
var menuNoProps = function(children) {
    return React.createElement(Menu, convertProps([], children));
};

var MenuItem = require('react-toolbox').MenuItem;
var menuItem = function(props) {
    return function(children) {
        return React.createElement(MenuItem, convertProps(props, children));
    };
};
var menuItemNoProps = function(children) {
    return React.createElement(MenuItem, convertProps([], children));
};

var MenuDivider = require('react-toolbox').MenuDivider;
var menuDivider = function() {
    return React.createElement(MenuDivider);
};

var IconMenu = require('react-toolbox').IconMenu;
var iconMenu = function(props) {
    return function(children) {
        return React.createElement(IconMenu, convertProps(props, children));
    };
};
var iconMenuNoProps = function(children) {
    return React.createElement(IconMenu, convertProps([], children));
};

var Navigation = require('react-toolbox').Navigation;
var navigation = function(props) {
    return function(children) {
        return React.createElement(Navigation, convertProps(props, children));
    };
};
var navigationNoProps = function(children) {
    return React.createElement(Navigation, convertProps([], children));
};

var Overlay = require('react-toolbox').Overlay;
var overlay = function(props) {
    return function(children) {
        return React.createElement(Overlay, convertProps(props, children));
    };
};
var overlayNoProps = function(children) {
    return React.createElement(Overlay, convertProps([], children));
};

var ProgressBar = require('react-toolbox').ProgressBar;
var progressBar = function(props) {
    return React.createElement(ProgressBar, convertProps(props));
};

var RadioButton = require('react-toolbox').RadioButton;
var radioButton = function(props) {
    return React.createElement(RadioButton, convertProps(props));
};

var RadioGroup = require('react-toolbox').RadioGroup;
var radioGroup = function(props) {
    return function(children) {
        return React.createElement(RadioGroup, convertProps(props, children));
    };
};
var radioGroupNoProps = function(children) {
    return React.createElement(RadioGroup, convertProps([], children));
};

var Ripple = require('react-toolbox').Ripple;
var ripple = function(props) {
    return function(child) {
        return React.createElement(Ripple, convertProps(props))(child);
    };
};
var rippleNoProps = function(child) {
    return React.createElement(Ripple)(child);
};

var Slider = require('react-toolbox').Slider;
var slider = function(props) {
    return React.createElement(Slider, convertProps(props));
};

var Snackbar = require('react-toolbox').Snackbar;
var snackbar = function(props) {
    return React.createElement(Slider, convertProps(props));
};

var Switch = require('react-toolbox').Switch;
var switch$prime = function(props) {
    return React.createElement(Switch, convertProps(props));
};

var Table = require('react-toolbox').Table;
var table = function(props) {
    return React.createElement(Table, convertProps(props));
};

var Tab = require('react-toolbox').Tab;
var tab = function(props) {
    return function(children) {
        return React.createElement(Tab, convertProps(props, children));
    };
};
var tabNoProps = function(children) {
    return React.createElement(Tab, convertProps([], children));
};

var Tabs = require('react-toolbox').Tabs;
var tabs = function(props) {
    return function(children) {
        return React.createElement(Tabs, convertProps(props, children));
    };
};
var tabsNoProps = function(children) {
    return React.createElement(Tabs, convertProps([], children));
};

var Timepicker = require('react-toolbox').TimePicker;
var timePicker = function(props) {
    return React.createElement(TimePicker, convertProps(props));
};

var Tooltip = require('react-toolbox').Tooltip;
var tooltip = function(props) {
    return function(children) {
        return React.createElement(Tooltip, convertProps(props, children));
    };
};
var tooltipNoProps = function(children) {
    return React.createElement(Tooltip, convertProps([], children));
};

module.exports = {
    appBar: appBar,
    appBarNoProps: appBarNoProps,
    autocomplete: autocomplete,
    avatar: avatar,
    avatarNoProps: avatarNoProps,
    button: button,
    buttonNoProps: buttonNoProps,
    iconButton: iconButton,
    iconButtonNoProps: iconButtonNoProps,
    card: card,
    cardNoProps: cardNoProps,
    cardMedia: cardMedia,
    cardMediaNoProps: cardMediaNoProps,
    cardTitle: cardTitle,
    cardTitleNoProps: cardTitleNoProps,
    cardText: cardText,
    cardTextNoProps: cardTextNoProps,
    cardActions: cardActions,
    cardActionsNoProps: cardActionsNoProps,
    checkbox: checkbox,
    chip: chip,
    chipNoProps: chipNoProps,
    datePicker: datePicker,
    dialog: dialog,
    dialogNoProps: dialogNoProps,
    drawer: drawer,
    drawerNoProps: drawerNoProps,
    dropdown: dropdown,
    fontIcon: fontIcon,
    fontIconNoProps: fontIconNoProps,
    form: form,
    formNoProps: formNoProps,
    input: input,
    inputNoProps: inputNoProps,
    layout: layout,
    layoutNoProps: layoutNoProps,
    navDrawer: navDrawer,
    navDrawerNoProps: navDrawerNoProps,
    panel: panel,
    panelNoProps: panelNoProps,
    sidebar: sidebar,
    sidebarNoProps: sidebarNoProps,
    link: link,
    linkNoProps: linkNoProps,
    list: list,
    listNoProps: listNoProps,
    listItem: listItem,
    listItemNoProps: listItemNoProps,
    listDivider: listDivider,
    listCheckbox: listCheckbox,
    listSubHeader: listSubHeader,
    listItemText: listItemText,
    listItemContent: listItemContent,
    listItemContentNoProps: listItemContentNoProps,
    menu: menu,
    menuNoProps: menuNoProps,
    menuItem: menuItem,
    menuItemNoProps: menuItemNoProps,
    menuDivider: menuDivider,
    iconMenu: iconMenu,
    iconMenuNoProps: iconMenuNoProps,
    navigation: navigation,
    navigationNoProps: navigationNoProps,
    overlay: overlay,
    overlayNoProps: overlayNoProps,
    progressBar: progressBar,
    radioButton: radioButton,
    radioGroup: radioGroup,
    radioGroupNoProps: radioGroupNoProps,
    ripple: ripple,
    rippleNoProps: rippleNoProps,
    slider: slider,
    snackbar: snackbar,
    switch: switch$prime,
    table: table,
    tab: tab,
    tabNoProps: tabNoProps,
    tabs: tabs,
    tabsNoProps: tabsNoProps,
    timePicker: timePicker,
    tooltip: tooltip,
    tooltipNoProps: tooltipNoProps
};
