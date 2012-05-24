---
layout: post
title: Jim Weirich
meta: Power Rake
desc: In this talk we will cover the "hidden" features of Rake that are not typically used by the casual Rake user.  We will learn about the convenience of file lists, dynamic generation of tasks, rule based file generation and more.
image: /images/speakers/small/jim.jpg
author: GORUCO
---

##Talk Description

Every Ruby developer uses the Rake program all the time, whether to run the database migrations in their Rails project or to just execute their tests.  Some might have even written their own rake tasks to help them perform some menial development task.

But Rake has capabilities far beyond just simple task automation. Rake is a fine grained, dependency driven, build tool that knows how to transform files, walk directory trees, and serve you supper. And it does it with the minimal possible effort. (I might have lied about the supper.)

In this talk we will cover the "hidden" features of Rake that are not typically used by the casual Rake user.  We will learn about the convenience of file lists, dynamic generation of tasks, rule based file generation and more.  Come learn about Power Rake.

Motivation (this section is not part of the public abstract, but is additional information for the conference planners)

I've noticed lately that a lot of people are writing rake tasks that just barely scratch the surface of the capabilities that are embedded in rake.  They manually build lists of files rather than use FileLists.  They use clumsy regular expressions to manipulate file names rather than use the pathmap command.  And they use coarse grained dependencies to rebuild the world rather than really defining what their dependencies are. This talk is me doing my little bit to help folks use Rake more effectively.

##Bio

Jim Weirich first learned about computers when his college adviser suggested he take a computer science course: "It will be useful, and you might enjoy it." With those prophetic words, Jim has been developing now for over 25 years, working with everything from crunching rocket launch data on supercomputers to wiring up servos and LEDs on micro-controllers.  Currently he loves working in Ruby and Rails as the Chief Scientist at EdgeCase, but you can also find him strumming on his ukulele as time permits.