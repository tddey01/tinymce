/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */

import AddOnManager from './AddOnManager';
import { DomQueryConstructor } from './dom/DomQuery';
import Editor from './Editor';
import { NotificationManagerImpl } from './NotificationManager';
import { WindowManagerImpl } from './WindowManager';

export type Theme = {
  ui?: any;
  execCommand? (command: string, ui?: boolean, value?: any): boolean;
  destroy? (): void;
  init? (editor: Editor, url: string, $: DomQueryConstructor);
  renderUI? (): { iframeContainer?: HTMLIFrameElement; editorContainer: HTMLElement };
  getNotificationManagerImpl? (): NotificationManagerImpl;
  getWindowManagerImpl? (): WindowManagerImpl;
};

type ThemeManager = AddOnManager<Theme>;
const ThemeManager: ThemeManager = AddOnManager.ThemeManager;

export default ThemeManager;
