import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "chosen-container": {
        "position": "relative",
        "display": "inline-block",
        "verticalAlign": "middle",
        "fontSize": 13,
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none"
    },
    "chosen-container *": {
        "WebkitBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "chosen-container chosen-drop": {
        "position": "absolute",
        "top": "100%",
        "zIndex": 1010,
        "width": "100%",
        "border": "1px solid #aaa",
        "borderTop": 0,
        "background": "#fff",
        "WebkitBoxShadow": "0 4px 5px rgba(0, 0, 0, 0.15)",
        "boxShadow": "0 4px 5px rgba(0, 0, 0, 0.15)",
        "clip": "rect(0, 0, 0, 0)"
    },
    "chosen-containerchosen-with-drop chosen-drop": {
        "clip": "auto"
    },
    "chosen-container a": {
        "cursor": "pointer"
    },
    "chosen-container search-choice group-name": {
        "marginRight": 4,
        "overflow": "hidden",
        "whiteSpace": "nowrap",
        "textOverflow": "ellipsis",
        "fontWeight": "normal",
        "color": "#999999"
    },
    "chosen-container chosen-single group-name": {
        "marginRight": 4,
        "overflow": "hidden",
        "whiteSpace": "nowrap",
        "textOverflow": "ellipsis",
        "fontWeight": "normal",
        "color": "#999999"
    },
    "chosen-container search-choice group-name:after": {
        "content": ":",
        "paddingLeft": 2,
        "verticalAlign": "top"
    },
    "chosen-container chosen-single group-name:after": {
        "content": ":",
        "paddingLeft": 2,
        "verticalAlign": "top"
    },
    "chosen-container-single chosen-single": {
        "position": "relative",
        "display": "block",
        "overflow": "hidden",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 8,
        "height": 25,
        "border": "1px solid #aaa",
        "borderRadius": 5,
        "backgroundColor": "#fff",
        "background": "linear-gradient(#fff 20%, #f6f6f6 50%, #eee 52%, #f4f4f4 100%)",
        "backgroundClip": "padding-box",
        "WebkitBoxShadow": "0 0 3px #fff inset, 0 1px 1px rgba(0, 0, 0, 0.1)",
        "boxShadow": "0 0 3px #fff inset, 0 1px 1px rgba(0, 0, 0, 0.1)",
        "color": "#444",
        "textDecoration": "none",
        "whiteSpace": "nowrap",
        "lineHeight": 24
    },
    "chosen-container-single chosen-default": {
        "color": "#999"
    },
    "chosen-container-single chosen-single span": {
        "display": "block",
        "overflow": "hidden",
        "marginRight": 26,
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap"
    },
    "chosen-container-single chosen-single-with-deselect span": {
        "marginRight": 38
    },
    "chosen-container-single chosen-single abbr": {
        "position": "absolute",
        "top": 6,
        "right": 26,
        "display": "block",
        "width": 12,
        "height": 12,
        "background": "url(\"../images/chosen-sprite.png\") -42px 1px no-repeat",
        "fontSize": 1
    },
    "chosen-container-single chosen-single abbr:hover": {
        "backgroundPosition": "-42px -10px"
    },
    "chosen-container-singlechosen-disabled chosen-single abbr:hover": {
        "backgroundPosition": "-42px -10px"
    },
    "chosen-container-single chosen-single div": {
        "position": "absolute",
        "top": 0,
        "right": 0,
        "display": "block",
        "width": 18,
        "height": "100%"
    },
    "chosen-container-single chosen-single div b": {
        "display": "block",
        "width": "100%",
        "height": "100%",
        "background": "url(\"../images/chosen-sprite.png\") no-repeat 0px 2px"
    },
    "chosen-container-single chosen-search": {
        "position": "relative",
        "zIndex": 1010,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 3,
        "paddingRight": 4,
        "paddingBottom": 3,
        "paddingLeft": 4,
        "whiteSpace": "nowrap"
    },
    "chosen-container-single chosen-search input[type=\"text\"]": {
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "paddingTop": 4,
        "paddingRight": 20,
        "paddingBottom": 4,
        "paddingLeft": 5,
        "width": "100%",
        "height": "auto",
        "outline": 0,
        "border": "1px solid #aaa",
        "background": "url(\"../images/chosen-sprite.png\") no-repeat 100% -20px",
        "fontSize": 1,
        "fontFamily": "sans-serif",
        "lineHeight": "normal",
        "borderRadius": 0
    },
    "chosen-container-single chosen-drop": {
        "marginTop": -1,
        "borderRadius": "0 0 4px 4px",
        "backgroundClip": "padding-box"
    },
    "chosen-container-singlechosen-container-single-nosearch chosen-search": {
        "position": "absolute",
        "clip": "rect(0, 0, 0, 0)"
    },
    "chosen-container chosen-results": {
        "color": "#444",
        "position": "relative",
        "overflowX": "hidden",
        "overflowY": "auto",
        "marginTop": 0,
        "marginRight": 4,
        "marginBottom": 4,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 4,
        "maxHeight": 240,
        "WebkitOverflowScrolling": "touch"
    },
    "chosen-container chosen-results li": {
        "display": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 5,
        "paddingRight": 6,
        "paddingBottom": 5,
        "paddingLeft": 6,
        "listStyle": "none",
        "lineHeight": 15,
        "wordWrap": "break-word",
        "WebkitTouchCallout": "none"
    },
    "chosen-container chosen-results liactive-result": {
        "display": "list-item",
        "cursor": "pointer"
    },
    "chosen-container chosen-results lidisabled-result": {
        "display": "list-item",
        "color": "#ccc",
        "cursor": "default"
    },
    "chosen-container chosen-results lihighlighted": {
        "backgroundColor": "#3875d7",
        "backgroundImage": "linear-gradient(#3875d7 20%, #2a62bc 90%)",
        "color": "#fff"
    },
    "chosen-container chosen-results lino-results": {
        "color": "#777",
        "display": "list-item",
        "background": "#f4f4f4"
    },
    "chosen-container chosen-results ligroup-result": {
        "display": "list-item",
        "fontWeight": "bold",
        "cursor": "default"
    },
    "chosen-container chosen-results ligroup-option": {
        "paddingLeft": 15
    },
    "chosen-container chosen-results li em": {
        "fontStyle": "normal",
        "textDecoration": "underline"
    },
    "chosen-container-multi chosen-choices": {
        "position": "relative",
        "overflow": "hidden",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 0,
        "paddingLeft": 5,
        "width": "100%",
        "height": "auto",
        "border": "1px solid #aaa",
        "backgroundColor": "#fff",
        "backgroundImage": "linear-gradient(#eee 1%, #fff 15%)",
        "cursor": "text"
    },
    "chosen-container-multi chosen-choices li": {
        "float": "left",
        "listStyle": "none"
    },
    "chosen-container-multi chosen-choices lisearch-field": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "whiteSpace": "nowrap"
    },
    "chosen-container-multi chosen-choices lisearch-field input[type=\"text\"]": {
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "height": 25,
        "outline": 0,
        "border": "0 !important",
        "background": "transparent !important",
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "color": "#999",
        "fontSize": "100%",
        "fontFamily": "sans-serif",
        "lineHeight": "normal",
        "borderRadius": 0,
        "width": 25
    },
    "chosen-container-multi chosen-choices lisearch-choice": {
        "position": "relative",
        "marginTop": 3,
        "marginRight": 5,
        "marginBottom": 3,
        "marginLeft": 0,
        "paddingTop": 3,
        "paddingRight": 20,
        "paddingBottom": 3,
        "paddingLeft": 5,
        "border": "1px solid #aaa",
        "maxWidth": "100%",
        "borderRadius": 3,
        "backgroundColor": "#eeeeee",
        "backgroundImage": "linear-gradient(#f4f4f4 20%, #f0f0f0 50%, #e8e8e8 52%, #eee 100%)",
        "backgroundSize": "100% 19px",
        "backgroundRepeat": "repeat-x",
        "backgroundClip": "padding-box",
        "WebkitBoxShadow": "0 0 2px #fff inset, 0 1px 0 rgba(0, 0, 0, 0.05)",
        "boxShadow": "0 0 2px #fff inset, 0 1px 0 rgba(0, 0, 0, 0.05)",
        "color": "#333",
        "lineHeight": 13,
        "cursor": "default"
    },
    "chosen-container-multi chosen-choices lisearch-choice span": {
        "wordWrap": "break-word"
    },
    "chosen-container-multi chosen-choices lisearch-choice search-choice-close": {
        "position": "absolute",
        "top": 4,
        "right": 3,
        "display": "block",
        "width": 12,
        "height": 12,
        "background": "url(\"../images/chosen-sprite.png\") -42px 1px no-repeat",
        "fontSize": 1
    },
    "chosen-container-multi chosen-choices lisearch-choice search-choice-close:hover": {
        "backgroundPosition": "-42px -10px"
    },
    "chosen-container-multi chosen-choices lisearch-choice-disabled": {
        "paddingRight": 5,
        "border": "1px solid #ccc",
        "backgroundColor": "#e4e4e4",
        "backgroundImage": "linear-gradient(#f4f4f4 20%, #f0f0f0 50%, #e8e8e8 52%, #eee 100%)",
        "color": "#666"
    },
    "chosen-container-multi chosen-choices lisearch-choice-focus": {
        "background": "#d4d4d4"
    },
    "chosen-container-multi chosen-choices lisearch-choice-focus search-choice-close": {
        "backgroundPosition": "-42px -10px"
    },
    "chosen-container-multi chosen-results": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "chosen-container-multi chosen-drop result-selected": {
        "display": "list-item",
        "color": "#ccc",
        "cursor": "default"
    },
    "chosen-container-active chosen-single": {
        "border": "1px solid #5897fb",
        "WebkitBoxShadow": "0 0 5px rgba(0, 0, 0, 0.3)",
        "boxShadow": "0 0 5px rgba(0, 0, 0, 0.3)"
    },
    "chosen-container-activechosen-with-drop chosen-single": {
        "border": "1px solid #aaa",
        "borderBottomRightRadius": 0,
        "borderBottomLeftRadius": 0,
        "backgroundImage": "linear-gradient(#eee 20%, #fff 80%)",
        "WebkitBoxShadow": "0 1px 0 #fff inset",
        "boxShadow": "0 1px 0 #fff inset"
    },
    "chosen-container-activechosen-with-drop chosen-single div": {
        "borderLeft": "none",
        "background": "transparent"
    },
    "chosen-container-activechosen-with-drop chosen-single div b": {
        "backgroundPosition": "-18px 2px"
    },
    "chosen-container-active chosen-choices": {
        "border": "1px solid #5897fb",
        "WebkitBoxShadow": "0 0 5px rgba(0, 0, 0, 0.3)",
        "boxShadow": "0 0 5px rgba(0, 0, 0, 0.3)"
    },
    "chosen-container-active chosen-choices lisearch-field input[type=\"text\"]": {
        "color": "#222 !important"
    },
    "chosen-disabled": {
        "opacity": "0.5 !important",
        "cursor": "default"
    },
    "chosen-disabled chosen-single": {
        "cursor": "default"
    },
    "chosen-disabled chosen-choices search-choice search-choice-close": {
        "cursor": "default"
    },
    "chosen-rtl": {
        "textAlign": "right"
    },
    "chosen-rtl chosen-single": {
        "overflow": "visible",
        "paddingTop": 0,
        "paddingRight": 8,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "chosen-rtl chosen-single span": {
        "marginRight": 0,
        "marginLeft": 26,
        "direction": "rtl"
    },
    "chosen-rtl chosen-single-with-deselect span": {
        "marginLeft": 38
    },
    "chosen-rtl chosen-single div": {
        "right": "auto",
        "left": 3
    },
    "chosen-rtl chosen-single abbr": {
        "right": "auto",
        "left": 26
    },
    "chosen-rtl chosen-choices li": {
        "float": "right"
    },
    "chosen-rtl chosen-choices lisearch-field input[type=\"text\"]": {
        "direction": "rtl"
    },
    "chosen-rtl chosen-choices lisearch-choice": {
        "marginTop": 3,
        "marginRight": 5,
        "marginBottom": 3,
        "marginLeft": 0,
        "paddingTop": 3,
        "paddingRight": 5,
        "paddingBottom": 3,
        "paddingLeft": 19
    },
    "chosen-rtl chosen-choices lisearch-choice search-choice-close": {
        "right": "auto",
        "left": 4
    },
    "chosen-rtlchosen-container-single chosen-results": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 4,
        "marginLeft": 4,
        "paddingTop": 0,
        "paddingRight": 4,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "chosen-rtl chosen-results ligroup-option": {
        "paddingRight": 15,
        "paddingLeft": 0
    },
    "chosen-rtlchosen-container-activechosen-with-drop chosen-single div": {
        "borderRight": "none"
    },
    "chosen-rtl chosen-search input[type=\"text\"]": {
        "paddingTop": 4,
        "paddingRight": 5,
        "paddingBottom": 4,
        "paddingLeft": 20,
        "background": "url(\"../images/chosen-sprite.png\") no-repeat -30px -20px",
        "direction": "rtl"
    },
    "chosen-rtlchosen-container-single chosen-single div b": {
        "backgroundPosition": "6px 2px"
    },
    "chosen-rtlchosen-container-singlechosen-with-drop chosen-single div b": {
        "backgroundPosition": "-12px 2px"
    }
});