import { AlertBanner, AlertBannerSpec } from './AlertBanner';
import { Bar, BarSpec } from './Bar';
import { Button, ButtonSpec } from './Button';
import { Checkbox, CheckboxSpec } from './Checkbox';
import { Collection, CollectionSpec } from './Collection';
import { ColorInput, ColorInputSpec } from './ColorInput';
import { ColorPicker, ColorPickerSpec } from './ColorPicker';
import { DropZone, DropZoneSpec } from './Dropzone';
import { Grid, GridSpec } from './Grid';
import { Iframe, IframeSpec } from './Iframe';
import { ImageTools, ImageToolsSpec } from './ImageTools';
import { Input, InputSpec } from './Input';
import { Label, LabelSpec } from './Label';
import { SelectBox, SelectBoxSpec } from './SelectBox';
import { SizeInput, SizeInputSpec } from './SizeInput';
import { Table, TableSpec } from './Table';
import { TextArea, TextAreaSpec } from './Textarea';
import { UrlInput, UrlInputSpec } from './UrlInput';
import { HtmlPanel, HtmlPanelSpec } from './HtmlPanel';
import { Panel, PanelSpec } from './Panel';

export type BodyComponentSpec
  = BarSpec
  | ButtonSpec
  | CheckboxSpec
  | TextAreaSpec
  | InputSpec
  | SelectBoxSpec
  | SizeInputSpec
  | IframeSpec
  | HtmlPanelSpec
  | UrlInputSpec
  | DropZoneSpec
  | ColorInputSpec
  | GridSpec
  | ColorPickerSpec
  | ImageToolsSpec
  | AlertBannerSpec
  | CollectionSpec
  | LabelSpec
  | TableSpec
  | PanelSpec;

export type BodyComponent
  = Bar
  | Button
  | Checkbox
  | TextArea
  | Input
  | SelectBox
  | SizeInput
  | Iframe
  | HtmlPanel
  | UrlInput
  | DropZone
  | ColorInput
  | Grid
  | ColorPicker
  | ImageTools
  | AlertBanner
  | Collection
  | Label
  | Table
  | Panel;
