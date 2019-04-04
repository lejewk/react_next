import Layout from "../components/Layout"
import { withRouter } from 'next/router'
import Markdown from 'react-markdown'

export default withRouter(props => (
    <Layout>
        <h1>{props.router.query.title}</h1>
        <div className="markdown">
            <Markdown 
                source={`
This is our blog post.
Yes. We can have a [Link](/link)
ANd we can have a title as wll.

### This is a title

And here's the content'
                `}
            />
        </div>
    </Layout>
))
