'use strict';

import { window, TextEditor, Range, Position } from 'vscode';

export default function(text: string, editor?: TextEditor): Thenable<void> {
	editor = editor || window.activeTextEditor;

	if (!editor) {
		return Promise.resolve();
	}

	return new Promise<void>(resolve => {
		editor.edit(builder => {
			const document = editor.document;
			const lastLine = document.lineAt(document.lineCount - 2);

			const start = new Position(0, 0);
			const end = new Position(document.lineCount - 1, lastLine.text.length);

			builder.replace(new Range(start, end), text);

			resolve();
		});
	});
}
