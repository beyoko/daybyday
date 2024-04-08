import type { Item } from './Item.interface'

export const itemTreeSymbol = Symbol('ItemTree')

export function isItemTree(item: Item | ItemTree): item is ItemTree {
  return itemTreeSymbol in item
}

export interface ItemTree {
  [itemTreeSymbol]: true
  [key: string]: ItemTree | Item
}
