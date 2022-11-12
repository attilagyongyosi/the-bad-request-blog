import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';

interface BlogPostProps {
    pageContext: {
        title: string;
        content: string;
    }
}

export default function BlogPost(props: BlogPostProps): JSX.Element {
    return <div>
        <span>{ props.pageContext.title }</span>
        <div className={'markdown-body'}>
            <ReactMarkdown rehypePlugins={[ rehypeHighlight ]}>{props.pageContext.content}</ReactMarkdown>
        </div>
    </div>;
}
