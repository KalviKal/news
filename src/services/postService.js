const SPACE = 'gwol08lci4q0'
const TOKEN = 'Bearer yc0GlUtLW6YThcCNDNggEcx5rUe_fOxuPaIqXozZYdE'
const URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/master`

async function _fetch(request, retries = 0) {
    const result = await fetch(
        URL,
        {
            method: 'POST',
            headers: {
                Authorization: TOKEN,
                //Origin: ORIGIN,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({query: request})
        }
    )

    if (result.status === 408 ) {
      if (retries > 3) {
        throw new Error('timeout in 3 retires')
      }
      return _fetch(request, retries +1)
    }

    if (!result.ok) {
      throw new Error('fetching failed')
    }
    
    const data = await result.json();
    return data;
}

const PostsRequests = `
 query {
  postCollection {
    items{
          sys {
              id
            }
  				title
  				date
      picture{
        title
        url
      }
      author{
        name
      }
      content{json}
		}
  }
}
`

async function fetchBlogPostsList() {
  const data = await _fetch(PostsRequests)
  console.log(data)

  const blogItems = data.data.postCollection.items.map((rec) => {
    return {
      id: rec.sys.id,
      title: rec.title,
      pictureUrl: rec.picture.url,
      authorName: rec.author.name
      
    }
  })
  return blogItems
}


export {
  fetchBlogPostsList
}