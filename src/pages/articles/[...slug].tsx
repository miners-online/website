'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Grid,
  Column,
} from '@carbon/react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Markdown from 'react-markdown';
import RootLayout from '@/app/layout';
import remarkGfm from 'remark-gfm'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'

export async function getStaticPaths() {
  try {
    const files = getAllFiles('src/content');

    const paths = files.map((filePath) => {
      const relativePath = path.relative('src/content', filePath);
      const slug = relativePath.replace(/\.md$/, '').split(path.sep);
      return {
        params: {
          slug: slug,
        },
      };
    });

    return {
      paths,
      fallback: 'blocking',
    };
  } catch (error) {
    console.error(error);

    return {
      paths: [], 
      fallback: false
    };  
  }
};

function getAllFiles(dir: string): string[] {
  const files = fs.readdirSync(dir, { withFileTypes: true });

  return files.flatMap((file) => {
    const filePath = path.join(dir, file.name);
    return file.isDirectory() ? getAllFiles(filePath) : filePath;
  });
}

interface StaticProps {
  params: {
    slug: string[];
  };
}

export async function getStaticProps({params: { slug }}: StaticProps) {
  try {
    const newSlug = path.join(...slug);
    const filePath = path.join('src/content', newSlug) + '.md';
    const fileName = fs.readFileSync(filePath, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);

    return {
      props: {
        slug: newSlug,
        frontmatter,
        content
      }   
    };  
  } catch (error) {
    console.error(error);

    return {
      props: {}
    };  
  }
};

interface StaticProps {
  params: {
    slug: string[];
  };
}

interface ArticleProps {
  slug: string;
  frontmatter: {
    title: string;
  };
  content: string;
}

export default function ArticlePage({ slug, frontmatter, content }: ArticleProps) {
  return (
    <RootLayout>
      <Grid className="articles-page" fullWidth>
        <Column lg={16} md={8} sm={4} className="articles-page__banner">
          <Breadcrumb noTrailingSlash aria-label="Page navigation">
            <BreadcrumbItem>
              <a href="/">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href="/articles">Articles</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href={`/articles/${slug}`}>{frontmatter.title}</a>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="articles-page__heading">Miners Online</h1>
        </Column>
        <Column lg={16} md={8} sm={4} className="articles-page__r2">
          <Tabs defaultSelectedIndex={0}>
            <TabList className="tabs-group" aria-label="Page navigation">
              <Tab>Content</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Grid className="tabs-group-content">
                  <Column
                    lg={16}
                    md={8}
                    sm={4}
                    className="articles-page__tab-content"
                  >
                    <h1 className="games-page__subheading">{ frontmatter.title }</h1>
                    <Markdown
                      remarkPlugins={[remarkGfm]}
                      children={content}
                      components={{
                        code(props) {
                          const {children, className, node, ...rest} = props
                          const match = /language-(\w+)/.exec(className || '')
                          return match ? (
                            <SyntaxHighlighter
                              {...rest}
                              PreTag="div"
                              children={String(children).replace(/\n$/, '')}
                              language={match[1]}
                            />
                          ) : (
                            <code {...rest} className={className}>
                              {children}
                            </code>
                          )
                        }
                      }}
                    />
                  </Column>
                </Grid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Column>
      </Grid>
    </RootLayout>
  );
}