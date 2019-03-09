import React from 'react'
// import {MDXProvider} from '@mdx-js/tag'

export default ({children}) => (
    <section style = 
    {{
        display: 'block',
        maxWidth: '90%',
        width : '650px',
        margin: '2rem auto'
    }}>
        {children}
    </section>
);