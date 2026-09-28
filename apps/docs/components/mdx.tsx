import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import type { MDXComponents } from 'mdx/types';

import { BlockPreview } from '@/components/block-preview';
import { BrandPalette } from '@/components/brand-palette';
import { ChartGallery } from '@/components/chart-gallery';
import { ComponentPreview } from '@/components/component-preview';
import {
  ColorScale,
  SemanticTokens,
  TokenSwatch,
} from '@/components/token-tables';
import { TextStyles } from '@/components/text-styles';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Tab,
    Tabs,
    Step,
    Steps,
    BlockPreview,
    BrandPalette,
    ChartGallery,
    ComponentPreview,
    ColorScale,
    SemanticTokens,
    TokenSwatch,
    TextStyles,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
