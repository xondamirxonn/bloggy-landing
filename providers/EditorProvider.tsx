"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

interface EditorState {
    isOpen: boolean;
    isPreviewMode: boolean;
    content: string;
    title: string;
    coverImage: string | null;
}

interface EditorContextType {
    editorState: EditorState;
    openEditor: (initialData?: Partial<Omit<EditorState, "isOpen">>) => void;
    closeEditor: () => void;
    updateEditorState: (updates: Partial<Omit<EditorState, "isOpen">>) => void;
}

const EditorContext = createContext<EditorContextType | undefined>(undefined);

export const EditorProvider = ({ children }: { children: React.ReactNode }) => {
    const [editorState, setEditorState] = useState<EditorState>({
        isOpen: false,
        isPreviewMode: false,
        content: "",
        title: "",
        coverImage: null,
    });

    const openEditor = useCallback((initialData?: Partial<Omit<EditorState, "isOpen">>) => {
        setEditorState((prev) => ({
            ...prev,
            ...initialData,
            isOpen: true,
        }));
    }, []);

    const closeEditor = useCallback(() => {
        setEditorState((prev) => ({
            ...prev,
            isOpen: false,
        }));
    }, []);

    const updateEditorState = useCallback((updates: Partial<Omit<EditorState, "isOpen">>) => {
        setEditorState((prev) => ({
            ...prev,
            ...updates,
        }));
    }, []);

    return (
        <EditorContext.Provider value={{ editorState, openEditor, closeEditor, updateEditorState }}>
            {children}
        </EditorContext.Provider>
    );
};

export const useEditorModal = () => {
    const context = useContext(EditorContext);
    if (context === undefined) {
        throw new Error("useEditorModal must be used within an EditorProvider");
    }
    return context;
};
