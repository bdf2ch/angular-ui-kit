export interface TreeItemConfig {
  key: string;
  parentKey: string;
  title: string;
  isRoot?: boolean;
  isExpanded?: boolean;
  isSelected?: boolean;
};


export class TreeItem {
  key: string = "";
  parentKey: string = "";
  title: string = "";
  isRoot: boolean = false;
  isExpanded: boolean = false;
  isSelected: boolean = false;
  children: TreeItem[] = [];

  constructor (config: TreeItemConfig) {
    this.key = config.key;
    this.parentKey = config.parentKey;
    this.title = config.title;
    this.isRoot = config.isRoot !== undefined ? config.isRoot : false;
    this.isExpanded = config.isExpanded !== undefined ? config.isExpanded : false;
  };
};
