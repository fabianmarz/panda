import type { CssProperty, ConditionCssProperties } from './panda-csstype'
import type { TokenCategory } from './tokens'

export type PatternProperty =
  | { type: 'property'; value: CssProperty }
  | { type: 'enum'; value: string[] }
  | { type: 'token'; value: TokenCategory; property?: CssProperty }
  | { type: 'string' | 'boolean' | 'number' }

type Value = string | { [key: string]: Value }

export type TransformHelpers = {
  map: (value: Value, fn: (value: string) => string | undefined) => any
}

export type PatternConfig = {
  /**
   * The description of the pattern. This will be used in the JSDoc comment.
   */
  description?: string
  /**
   * The properties of the pattern.
   */
  properties: Record<string, PatternProperty>
  /**
   * The css object this pattern will generate.
   */
  transform?: (props: Record<string, Value>, helpers: TransformHelpers) => ConditionCssProperties
  /**
   * The jsx element name this pattern will generate.
   */
  jsx?: string
  /**
   * Whether to only generate types for the specified properties.
   * This will disallow css properties
   */
  strict?: boolean
}
