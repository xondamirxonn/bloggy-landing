"use client";

import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import { BubbleMenu } from "@tiptap/react/menus";
import { mergeAttributes } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import BubbleMenuExtension from "@tiptap/extension-bubble-menu";
import ResizeImage from "tiptap-extension-resize-image";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import CharacterCount from "@tiptap/extension-character-count";
import {
    Bold,
    Italic,
    List,
    ListOrdered,
    Quote,
    Heading1,
    Heading2,
    Heading3,
    Link as LinkIcon,
    Image as ImageIcon,
    Undo,
    Redo,
    Type,
    Code,
    Strikethrough,
    Minus,
    Layout,
    AlignCenter,
    AlignLeft,
    AlignRight,
    Trash2,
    MessageSquareText
} from "lucide-react";

const ExtendedImage = ResizeImage.extend({
    name: "resizeImage",
    addAttributes() {
        return {
            ...this.parent?.(),
            caption: {
                default: null,
            },
        };
    },
    parseHTML() {
        return [
            {
                tag: 'img[src]',
            },
            {
                tag: 'figure',
                contentElement: 'img',
            },
        ];
    },
    renderHTML({ HTMLAttributes }) {
        const { caption, textAlign, ...rest } = HTMLAttributes;
        const imgAttributes = mergeAttributes(rest, {
            style: `display: block; width: ${rest.width || 'auto'}; height: ${rest.height || 'auto'}; margin-left: ${textAlign === 'left' ? '0' : 'auto'}; margin-right: ${textAlign === 'right' ? '0' : 'auto'};`,
            class: cn(
                rest.class,
                textAlign === 'left' && 'mr-auto ml-0',
                textAlign === 'center' && 'mx-auto',
                textAlign === 'right' && 'ml-auto mr-0'
            )
        });

        if (caption) {
            return [
                'figure',
                {
                    class: cn('image-figure my-12 flex flex-col items-center justify-center p-3 rounded-3xl border border-zinc-100 bg-zinc-50/20 transition-all duration-300 hover:shadow-xl', textAlign === 'left' ? 'text-left items-start' : textAlign === 'right' ? 'text-right items-end' : 'text-center items-center'),
                    style: `text-align: ${textAlign}`
                },
                ['img', imgAttributes],
                ['figcaption', { class: 'image-caption mt-4 text-center text-sm text-zinc-500 font-medium tracking-wide max-w-[90%] mx-auto' }, caption],
            ];
        }

        return ['img', imgAttributes];
    },
});
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { type Editor as TiptapEditor } from "@tiptap/react";

const MenuBar = ({ editor }: { editor: TiptapEditor | null }) => {
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    if (!editor) {
        return null;
    }

    const addImage = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const result = e.target?.result;
                if (typeof result === "string") {
                    editor.chain().focus().insertContent({
                        type: 'resizeImage',
                        attrs: { src: result }
                    }).run();
                }
            };
            reader.readAsDataURL(file);
        }
        // Reset input value to allow selecting the same file again
        event.target.value = "";
    };

    const setLink = () => {
        const previousUrl = editor.getAttributes("link").href;
        const url = window.prompt("URL", previousUrl);

        if (url === null) {
            return;
        }

        if (url === "") {
            editor.chain().focus().extendMarkRange("link").unsetLink().run();
            return;
        }

        editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
    };

    const sections = [
        [
            {
                icon: <Type size={18} />,
                onClick: () => editor.chain().focus().setParagraph().run(),
                isActive: editor.isActive("paragraph"),
                label: "Paragraph",
            },
            {
                icon: <Heading1 size={18} />,
                onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
                isActive: editor.isActive("heading", { level: 1 }),
                label: "Heading 1",
            },
            {
                icon: <Heading2 size={18} />,
                onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
                isActive: editor.isActive("heading", { level: 2 }),
                label: "Heading 2",
            },
            {
                icon: <Heading3 size={18} />,
                onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
                isActive: editor.isActive("heading", { level: 3 }),
                label: "Heading 3",
            },
        ],
        [
            {
                icon: <Bold size={18} />,
                onClick: () => editor.chain().focus().toggleBold().run(),
                isActive: editor.isActive("bold"),
                label: "Bold",
            },
            {
                icon: <Italic size={18} />,
                onClick: () => editor.chain().focus().toggleItalic().run(),
                isActive: editor.isActive("italic"),
                label: "Italic",
            },
            {
                icon: <Strikethrough size={18} />,
                onClick: () => editor.chain().focus().toggleStrike().run(),
                isActive: editor.isActive("strike"),
                label: "Strikethrough",
            },
            {
                icon: <Code size={18} />,
                onClick: () => editor.chain().focus().toggleCode().run(),
                isActive: editor.isActive("code"),
                label: "Inline Code",
            },
        ],
        [
            {
                icon: <List size={18} />,
                onClick: () => editor.chain().focus().toggleBulletList().run(),
                isActive: editor.isActive("bulletList"),
                label: "Bullet List",
            },
            {
                icon: <ListOrdered size={18} />,
                onClick: () => editor.chain().focus().toggleOrderedList().run(),
                isActive: editor.isActive("orderedList"),
                label: "Ordered List",
            },
            {
                icon: <Quote size={18} />,
                onClick: () => editor.chain().focus().toggleBlockquote().run(),
                isActive: editor.isActive("blockquote"),
                label: "Blockquote",
            },
            {
                icon: <Layout size={18} />,
                onClick: () => editor.chain().focus().toggleCodeBlock().run(),
                isActive: editor.isActive("codeBlock"),
                label: "Code Block",
            },
        ],
        [
            {
                icon: <LinkIcon size={18} />,
                onClick: setLink,
                isActive: editor.isActive("link"),
                label: "Link",
            },
            {
                icon: <ImageIcon size={18} />,
                onClick: addImage,
                isActive: editor.isActive("image"),
                label: "Image",
            },
            {
                icon: <Minus size={18} />,
                onClick: () => editor.chain().focus().setHorizontalRule().run(),
                isActive: false,
                label: "Divider",
            },
        ],
        [
            {
                icon: <AlignLeft size={18} />,
                onClick: () => editor.chain().focus().setTextAlign('left').run(),
                isActive: editor.isActive({ textAlign: 'left' }),
                label: "Align Left",
            },
            {
                icon: <AlignCenter size={18} />,
                onClick: () => editor.chain().focus().setTextAlign('center').run(),
                isActive: editor.isActive({ textAlign: 'center' }),
                label: "Align Center",
            },
            {
                icon: <AlignRight size={18} />,
                onClick: () => editor.chain().focus().setTextAlign('right').run(),
                isActive: editor.isActive({ textAlign: 'right' }),
                label: "Align Right",
            },
        ],
    ];

    return (
        <div className="flex flex-wrap items-center gap-1 mb-8 sticky top-0 bg-white/80 backdrop-blur-md z-40 p-1.5 border border-zinc-100 rounded-[1.25rem] shadow-sm transition-all duration-300 hover:shadow-xl hover:border-black/5">
            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
            />
            {sections.map((section, idx) => (
                <React.Fragment key={idx}>
                    {idx > 0 && <div className="w-px h-6 bg-zinc-100 mx-1" />}
                    <div className="flex items-center gap-1">
                        {section.map((btn, i) => (
                            <Button
                                key={i}
                                variant="ghost"
                                size="icon"
                                onClick={btn.onClick}
                                className={cn(
                                    "h-9 w-9 rounded-xl transition-all duration-300",
                                    btn.isActive
                                        ? "bg-black text-white hover:bg-black hover:text-white shadow-lg scale-[0.98]"
                                        : "text-zinc-400 hover:text-black hover:bg-zinc-100"
                                )}
                                title={btn.label}
                            >
                                {btn.icon}
                            </Button>
                        ))}
                    </div>
                </React.Fragment>
            ))}

            <div className="flex-1" />

            <div className="flex items-center gap-1">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={!editor.can().undo()}
                    className="h-9 w-9 text-zinc-400 hover:text-black rounded-xl"
                >
                    <Undo size={18} />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={!editor.can().redo()}
                    className="h-9 w-9 text-zinc-400 hover:text-black rounded-xl"
                >
                    <Redo size={18} />
                </Button>
            </div>
        </div>
    );
};

export const Editor = ({ content, onChange }: { content?: string, onChange?: (val: string) => void }) => {
    const editor = useEditor({
        immediatelyRender: false,
        extensions: [
            StarterKit.configure({
                heading: {
                    levels: [1, 2, 3],
                },
            }),
            Placeholder.configure({
                placeholder: "Tell your story...",
                emptyEditorClass: "is-editor-empty",
            }),
            BubbleMenuExtension,
            ExtendedImage.configure(),
            TextAlign.configure({
                types: ['heading', 'paragraph', 'image', 'resizeImage', 'figure'],
                alignments: ['left', 'center', 'right'],
            }),
            Link.configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: "text-black font-bold underline decoration-zinc-200 underline-offset-4 cursor-pointer",
                },
            }),
            CharacterCount,
        ],
        content: content || "",
        onUpdate: ({ editor }) => {
            onChange?.(editor.getHTML());
        },
        editorProps: {
            attributes: {
                class: "tiptap focus:outline-none max-w-none min-h-[500px]",
            },
        },
    });

    return (
        <div className="relative">
            <MenuBar editor={editor} />

            {editor && (
                <BubbleMenu
                    editor={editor}
                    shouldShow={({ editor }: { editor: TiptapEditor }) => {
                        return editor.isActive('resizeImage') || editor.isActive('image');
                    }}
                >
                    <div className="flex items-center gap-1 bg-black text-white p-1.5 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-md">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => editor.chain().focus().updateAttributes('resizeImage', { textAlign: 'left' }).run()}
                            className={cn(
                                "h-8 w-8 rounded-xl transition-all",
                                editor.getAttributes('resizeImage').textAlign === 'left' ? "bg-white/20 text-white" : "text-zinc-500 hover:text-white"
                            )}
                            title="Align Left"
                        >
                            <AlignLeft size={16} />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => editor.chain().focus().updateAttributes('resizeImage', { textAlign: 'center' }).run()}
                            className={cn(
                                "h-8 w-8 rounded-xl transition-all",
                                editor.getAttributes('resizeImage').textAlign === 'center' || !editor.getAttributes('resizeImage').textAlign ? "bg-white/20 text-white" : "text-zinc-500 hover:text-white"
                            )}
                            title="Align Center"
                        >
                            <AlignCenter size={16} />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => editor.chain().focus().updateAttributes('resizeImage', { textAlign: 'right' }).run()}
                            className={cn(
                                "h-8 w-8 rounded-xl transition-all",
                                editor.getAttributes('resizeImage').textAlign === 'right' ? "bg-white/20 text-white" : "text-zinc-500 hover:text-white"
                            )}
                            title="Align Right"
                        >
                            <AlignRight size={16} />
                        </Button>

                        <div className="w-px h-4 bg-white/10 mx-1" />

                        {/* Size Presets */}
                        <div className="flex items-center">
                            {(['25%', '50%', '100%'] as const).map((size) => (
                                <Button
                                    key={size}
                                    variant="ghost"
                                    onClick={() => editor.chain().focus().updateAttributes('resizeImage', { width: size }).run()}
                                    className={cn(
                                        "px-2 h-8 text-[10px] font-bold rounded-lg transition-all",
                                        editor.getAttributes('resizeImage').width === size ? "bg-white/20 text-white" : "text-zinc-500 hover:text-white"
                                    )}
                                >
                                    {size === '25%' ? 'S' : size === '50%' ? 'M' : 'F'}
                                </Button>
                            ))}
                        </div>

                        <div className="w-px h-4 bg-white/10 mx-1" />

                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => {
                                const caption = window.prompt("Enter caption", editor.getAttributes('resizeImage').caption || "");
                                editor.chain().focus().updateAttributes('resizeImage', { caption }).run();
                            }}
                            className={cn(
                                "h-8 w-8 rounded-xl transition-all",
                                editor.getAttributes('resizeImage').caption ? "bg-white/20 text-white" : "text-zinc-500 hover:text-white"
                            )}
                            title="Set Caption"
                        >
                            <MessageSquareText size={16} />
                        </Button>

                        <div className="w-px h-4 bg-white/10 mx-1" />

                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => editor.chain().focus().deleteSelection().run()}
                            className="h-8 w-8 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-900/20"
                            title="Delete Image"
                        >
                            <Trash2 size={16} />
                        </Button>
                    </div>
                </BubbleMenu>
            )}

            <EditorContent editor={editor} />

            {editor && (
                <div className="fixed bottom-12 left-1/2 -translate-x-1/2 bg-black/90 text-white px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-2xl z-50 flex items-center gap-4 backdrop-blur-xl border border-white/10 opacity-50 hover:opacity-100 transition-all duration-500 scale-90 hover:scale-100 origin-center">
                    <div className="flex items-center gap-2">
                        <span className="text-zinc-500">Words</span>
                        <span>{editor.storage.characterCount.words()}</span>
                    </div>
                    <div className="w-1 h-1 bg-white/20 rounded-full" />
                    <div className="flex items-center gap-2">
                        <span className="text-zinc-500">Chars</span>
                        <span>{editor.storage.characterCount.characters()}</span>
                    </div>
                </div>
            )}
        </div>
    );
};
