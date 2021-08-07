import fs from 'fs'
import path from 'path'
import matter from  'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

const root = process.cwd()

export const getFiles = () => fs.readdirSync(path.join(root, 'data'))

export const getFilesBySlug = async (slug) => {
  const sourceFiles = fs.readFileSync(path.join(root, 'data', `${slug}.mdx`), 'utf-8')

  const {data, content } = await matter(sourceFiles)
  const source = await serialize(content, {})

  return {
    source,
    frontmatter : {
      slug,
      ...data
    }
  }
}

export const getAllFilesMetaData = () => {
  const files = getFiles()

  return files.reduce((allPost, postSlug) => {
    const sourceFiles = fs.readFileSync(path.join(root, 'data', postSlug), 'utf-8')
    const { data } = matter(sourceFiles)

    return [{...data, slug: postSlug.replace('.mdx', '')}, ...allPost]
  }, [])
}

