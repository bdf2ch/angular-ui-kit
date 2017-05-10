"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
var TreeItem = (function () {
    function TreeItem(config) {
        this.key = "";
        this.parentKey = "";
        this.title = "";
        this.isRoot = false;
        this.isExpanded = false;
        this.isSelected = false;
        this.children = [];
        this.key = config.key;
        this.parentKey = config.parentKey;
        this.title = config.title;
        this.isRoot = config.isRoot !== undefined ? config.isRoot : false;
        this.isExpanded = config.isExpanded !== undefined ? config.isExpanded : false;
    }
    ;
    return TreeItem;
}());
exports.TreeItem = TreeItem;
;
