import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

//it function is a global function is not a global function
//the first argument is a string to communicate to humans the intent of the tests 
//the second argument is a function that will run 
//it is a continuation it "shows a comment box"

it ('shows a comment box', () => {
  //render the fake div with our app component istance in JSDOM using enzyme
  const wrapped = shallow(<App />); 
  //Looks inside the div
  //and checks to see if the commentBox is in there
  //expectations are the core of our tests they output what we want our test to do 'expect' global function like 'it'
  //first line is the thing we are looking at to and prove soemthing
  //second line is a matcher property e.g toContain
  //third line is the value we expect as an argument some matcher does not require an argument like toBeTrue e.t.c
  //IMPORTANT! when you write tests for one component you want to try to get the inner workings of another component
  //you only want it to know the inner workings of the the components being tests 
  //Just test to acknowledge that the foreign components exists because when it changes it will break your test
  //Need to install enzyme to abstract the code below for us brought to you by yours truly.
  //expect(div).toHaveAnInstanceOf(CommentBox);
  //enzyme uses the static, shallow(render only the component and none of it's children) and full DOM(render compoent and all it's children)
  expect(wrapped.find(CommentBox).length).toEqual(1);
  //After the test run make sure the tests breaks so you know that you are not running an erronous pass
  //unmount the div to avoid memeory leaks this is clean up code
});

it ('shows a comment list', () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(CommentList).length).toEqual(1);
});