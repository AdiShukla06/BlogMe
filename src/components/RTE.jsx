import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';

export default function RTE({ name, control, label, defaultValue = "" }) {
    const APIKEY = import.meta.env.VITE_TINYMCE_API_KEY;

    return (
        <div className='w-full'>
            {label && <label className='block mb-2 text-lg font-semibold text-gray-700'>{label}</label>}
            <Controller
                name={name || "content"}
                control={control}
                render={({ field: { onChange } }) => (
                    <Editor
                        apiKey={APIKEY}
                        initialValue={defaultValue}
                        init={{
                            height: 500,
                            menubar: false,
                            plugins: [
                                "image",
                                "advlist",
                                "autolink",
                                "lists",
                                "link",
                                "charmap",
                                "preview",
                                "anchor",
                                "searchreplace",
                                "visualblocks",
                                "code",
                                "fullscreen",
                                "insertdatetime",
                                "media",
                                "table",
                                "wordcount",
                            ],
                            toolbar:
                                "undo redo | formatselect | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                            branding: false,
                            statusbar: false,
                        }}
                        onEditorChange={onChange}
                    />
                )}
            />
        </div>
    );
}
