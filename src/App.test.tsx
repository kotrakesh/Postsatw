import React from 'react';
import { render, screen } from '@testing-library/react';
import  MenuList  from  './components/MenuList';
import { BrowserRouter } from 'react-router-dom';
import { PostDetails, PostList } from './components/posts';
import { Post, testPost } from './models/post';

test('renders wefox', () => {
  render(<BrowserRouter><MenuList /></BrowserRouter>);
  const element = screen.getByText(/Wefox/i);
  expect(element).toBeInTheDocument();
});

test('renders postlist', () => {
  const post:Post[] =[testPost] ; 
  render(<BrowserRouter><PostList post={post}/></BrowserRouter>);
  const element = screen.getByText(/Title/i);
  expect(element).toBeInTheDocument();
});

test('renders post details', () => {
  render(<BrowserRouter><PostDetails postDefault={testPost}/></BrowserRouter>);
  const element = screen.getByText(/Edit/i);
  expect(element).toBeInTheDocument();
});