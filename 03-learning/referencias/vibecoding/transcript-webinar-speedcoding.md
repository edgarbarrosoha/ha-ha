Cool. Yeah, I'm just gonna wait a bit and let people join.

Yeah, I guess I'll try to start in, like, 5 minutes, and… Meanwhile, I'm gonna try to do this auto-emit important thing.

Lighting room options.

Cool. Everybody, is joining me here. I'll just start sharing my screen.

Yeah, so this is for folks who kind of didn't make it to my talk last week, and maybe I'll do this regularly if it seems useful.

But, yeah, I'm… you can watch me, kind of try to manage the Zoom meeting room. This is kind of an issue last time. I'm unfamiliar with the Zoom, but, I think there's a way to, like…

Change the meeting settings so that…

People will just automatically come in. Let's see… Everyone goes to sleep here.

Waiting green.

Yay.

Well, I will keep manually adding people, thank you, Paul how do we do this?

Apologies.

Oops, nope, I don't want that.

Oh…

Yuki.

space, promising sync…

Chat settings, meetings, security, waiting room toggle.

Okay.

Exactly.

E.

Well, they can just keep pressing this button.

Strange.

Cool. Everybody coming in, planning to start pretty soon, I'm just… I figured out how to…

Not enough to click this waiting room thing.

Rocky | MediaCOM Inc

Rocky | MediaCOM Inc

03:32
It'll be near the bottom.

Ben Guo

Ben Guo

03:34
Should've been near the bottom.

Rocky | MediaCOM Inc

Rocky | MediaCOM Inc

03:35
Yeah, let's see, to…

Ben Guo

Ben Guo

03:39
Thanks for helping.

Rocky | MediaCOM Inc

Rocky | MediaCOM Inc

03:43
That was weird.

Go up a little bit.

Ben Guo

Ben Guo

03:46
Yep.

Hmm.

Strange.

Rocky | MediaCOM Inc

Rocky | MediaCOM Inc

03:53
She was right about…

Ben Guo

Ben Guo

03:55
Yeah, I would have expected something here.

Slow.

It's…

Rocky | MediaCOM Inc

Rocky | MediaCOM Inc

04:05
Meeting template?

Ben Guo

Ben Guo

04:07
Yeah, step, not…

Rocky | MediaCOM Inc

Rocky | MediaCOM Inc

04:10
Yeah.

Yeah, it's usually on that page, it just goes on.

Ben Guo

Ben Guo

04:15
Oh, really? Interesting. Like, this personal room thing?

Rocky | MediaCOM Inc

Rocky | MediaCOM Inc

04:17
Near the bottom there, like, right after… But I don't see it.

Ben Guo

Ben Guo

04:22
Interesting.

Rocky | MediaCOM Inc

Rocky | MediaCOM Inc

04:23
radio hostel…

Ben Guo

Ben Guo

04:25
Yeah, I'm not sure. Well, you know, it's okay. I'll just manually manage it. It might be a little awkward with pauses, but, it's alright.

Yeah, thank you for helping me.

Rocky | MediaCOM Inc

Rocky | MediaCOM Inc

04:37
I'm, actually going onto mine right now and seeing…

Ben Guo

Ben Guo

04:41
this.

Yixian Zheng

Yixian Zheng

04:42
If… if you give it to, host to me, I can admit.

That's what sometimes we do. You have another host… I see.

Rocky | MediaCOM Inc

Rocky | MediaCOM Inc

04:51
Oh, yeah.

Ben Guo

Ben Guo

04:52
I use this.

Yixian Zheng

Yixian Zheng

04:53
That's a lot, so I'm pretty familiar with it.

Ben Guo

Ben Guo

04:56
Nice. Yeah, that would be useful, actually, yeah.

Yixian Zheng

Yixian Zheng

04:58
Yeah, just give me the host. If you make me a host.

Ben Guo

Ben Guo

05:01
Nice.

Yixian Zheng

Yixian Zheng

05:02
then the request will come to me, then I can just keep clicking whenever I see new people come in.

Ben Guo

Ben Guo

05:09
Okay, nice.

Yixian Zheng

Yixian Zheng

05:10
a host.

Ben Guo

Ben Guo

05:11
I… yeah, I just made you a co-host.

Yixian Zheng

Yixian Zheng

05:13
Okay, yes, now I'm a co-host, so I should be able to see people coming, I'll admit them. Then they wouldn't interrupt your talk.

Excellent, thank you. Now I'm getting people coming, I can admit.

Ben Guo

Ben Guo

05:26
Nice, sweet. Thanks.

Yixian Zheng

Yixian Zheng

05:27
See, I'm a veteran of using Zoom.

Ben Guo

Ben Guo

05:30
Yeah, I'm new to Zoom. Everybody, I'm done. This is my mom. Yeah, thanks, Mom. Cool.

Awesome. Yeah, and I'll get started, I guess pretty soon. Yeah, I'll just get started now.

Cool. Yeah, I think I'm recording…

Rocky | MediaCOM Inc

Rocky | MediaCOM Inc

05:55
Yeah, you are.

Ben Guo

Ben Guo

05:56
Great, awesome. Cool. Apologies for me being a Zoom noob. Okay, let's,

Let's start. Okay, so I'm gonna be talking about my techniques for coding with AI. I've given this talk a few times before, and

Yeah, the whole…

kind of thesis of this is really kind of focused on kind of, like, my philosophy for working with AI in general. I think this, like, kind of applies beyond just coding. It's just kind of an intentional practice for kind of working with AI effectively, and really, I think, like, kind of augmenting

your own kind of abilities. I really believe in kind of a human-focused, kind of, like, human-in-the-loop workflow, and,

hopefully this can be an inspiration to you if you're, like, a software engineer, like, kind of seriously working with AI in a codebase, or if you're just kind of, like, picking up coding and vibe coding, or if you're just kind of… just working with AI in general, and want kind of, like, a way to kind of be more intentional with how you're kind of

building things or researching things using AI. So, a bit about me, I, my background is a software engineer. I started as,

a new grad at Venmo back in 2013. I spent most of my career at Scribe for about 8 years, where I cut my teeth, and for the last 2 years, I've been a startup founder. I'll talk a little bit about what I'm building at the end, but…

basically, as a technical founder, it's very important to kind of, like, build quickly, so being able to build fast using AI is really useful, and, it's been extremely, kind of, existentially helpful, just as a founder, kind of lets you validate ideas really quickly, and, kind of, like, just be in this really fast iteration loop, so, that's a very useful thing.

Just some links. I guess first of all, this whole slide deck is available to you. You can scan this QR code, and it'll get a link to this exact deck that I'm presenting now, but you can follow me on Twitter or LinkedIn, and in our Discord, we have a pretty active channel where

folks are talking about AI coding. Our product is… one of the use cases is coding with AI, so it's a good place to chat, and you can chat with me there, too.

So, as we were building this current product that we're working on, Zoho Computer, I was coding a lot with AI. This was my personal spend back in June, and my spend was about this high for 2 months, as we were kind of building the first version of the product.

So I code a lot with AI, and even today, I have been coding a lot with AI, and my techniques have basically remained the same, even since the beginning.

basically been using this workflow that I'll be talking about for the whole time, and I haven't really changed it too much, and it's quite simple, so I'm excited to share that with you all. So, we built the MVP of the product in about 2 months. It's a fairly complex product if you try it out. I think it's a real testament to kind of what is possible to build quickly using AI with kind of an experienced team of people that are also, like.

kind of very, open to using AI and kind of, like, really attuning their workflows, so it's really possible to

to build a lot quickly. So this talk is about, kind of, how I think about

going fast using AI, kind of my core principles and my workflow. I won't talk about specific tooling, but happy to do that in the Q&A.

I personally, I, like, spend a lot of my time when I'm coding seriously in Cursor, and then I use my own product, Zoho Computer, for all of my other kind of coding projects that aren't kind of, like, building Zoe the product itself.

So,

I like to start from the beginning of, kind of, what coding is. Coding really is a form of thinking. If you think about code itself, it's actually this kind of magical thing. Code is this…

It's this way that humans have figured out to basically build

digital machinery using concepts alone. So code is just a series of abstractions, on top of… it's like this, like, kind of, like, towering stack of abstractions, and we get to work at this, like, very high level, at this, like, kind of concept abstraction layer, and that's what we're doing when we're coding. We're just, like, kind of building concepts, and it's a form of thinking.

And the code itself is kind of, like, the materialized version of your thinking. And then…

if you've kind of, like, worked on coding projects before, you kind of are familiar with the idea that, like, coding requires this, like, deep flow state, to kind of, like, really execute on these ideas. This, like, thinking, requires this, like, deep focus. So, very core to my principles is, like, how do you maintain that focus, while you're working with AI to code?

So…

I want to take a little bit of a detour here and talk about, this, like, idea that I like to pull from, when you think about other people that operate heavy machinery, like trains or, you know, a kind of,

other kinds of machines. People have been, like, kind of working with machines for a long time, and there's this concept called point and call. It's this, like, kind of occupational safety practice that they use in Japan, and I think in other parts of Asia.

And essentially, this is a way to kind of maintain flow when you're working with a machine.

it's this kind of practice that I'll talk about, where it's all about, kind of, how do you become basically one with this, like, piece of machinery that has, like, a lot of, like, kind of moving parts, like, literally moving parts, by synchronizing, like, your own human perception with the kind of actions that are happening.

So, point and call essentially boils down to these three steps. First, you kind of, like, state what you perceive to be true, in the situation at hand, and then you say what you expect to happen.

So what you expect to happen when you do this action, and then you kind of, like, trust but verify that the thing that you expect to happen actually happened, and then you kind of just repeat this process, and you kind of, like, go in that loop. So I think that

is a really good model for thinking about how to work with AI, because what's happening when you're working with

AI in this kind of, like, really rapid fashion in a codebase is that you really are operating a heavy machine. Like, a lot is happening at once, and the trick, I think, really boils down to, like, kind of how do you kind of, like, stay, really locked into what's happening? So when I kind of

And when you think about what point-and-call really is, it's about flow state,

And when you're pointing, that is really, like, a testament to your understanding, like, you have to, like, kind of know where everything is. And then when you call out what's happening, that's also, like, an understanding thing. It's like, you know what everything does. So that is really, like, I would say a core piece of, like, how I maintain my flow state while I'm coding. I'm, like, pointing to things, I'm, like, telling the AI now, and that's… and I'm kind of

calling out what things do, and I'm kind of, like, verifying that, like, kind of my understanding of the situation, continues to remain correct.

And the… the kind of core piece of my workflow, and it's really quite simple, is

is planning. So, kind of, the first step in my kind of pointing phase of my process is to kind of research the code and kind of understand what's going on and kind of what I want to do.

And then I generate a plan. So our codebase is full of these plan files, and importantly, we, like, keep these plans inside of our codebase, and they're just, like, the core, kind of, like, work that I'm doing day-to-day is, like, I'm creating these plans as I kind of research the code, and I'm kind of planning out what to do in collaboration with AI,

I'm iterating a ton on these plans, to kind of get them into the shape that I want, and in a sense, this is, like, a form of prompt engineering. I'm, like, kind of, like, building

the ideal prompt that I eventually want the AI to do.

So, these plan files are critical. They're, like, the core thing that I look at. They're really important. You should always commit them into your codebase, so you don't just, like, throw them away. This is why I like to actually, like, maintain the files in my codebase. A lot of tools, they come with, like, planning modes and stuff like that, but I find that when you do that, you're kind of, like.

kind of outsourcing the planning process itself, and you're also often discarding those plan files. They're not, like, kind of entering your codebase. So I recommend just planning with document files, and keeping these in your codebase.

So, for me, plans have become really the new code, and this is what a typical plan file looks like for me.

It kind of starts out at a very high level, with kind of basically an executive summary of what's going to happen.

I like to break my plans down into phases, and you can see at the top of this plan file the kind of summary of each phase, at a high level, kind of what's going on. And then when you look at the phase itself.

These also start at a pretty high level, just covering the files that are about to change, and a summary of the changes. And after that, it, like, goes really deep, and effectively, tells… it kind of, like, describes very precisely all the code changes that are going to happen. So,

In a way, what's happening here is I'm simulating the code changes that are going to happen as a result of this plan in great detail, and it's, like, so precise that there's really no ambiguity between the plan and the code that's going to be generated. So the goal is to reach a place where this plan

is effectively the code change. It hasn't kind of been executed yet, but it has all of the details of the code change that is about to happen when I decide the plan is ready.

So, the important piece of this is kind of the prompt that generates this plan file, and I generally recommend that if you're kind of familiar with coding, you should kind of, like, experiment with this yourself and, like, find the plan

format, and plan prompt that makes sense for you. We have a plan prompt, that you'll find, in this slide deck if you, like, scan a QR code, but,

This is a really good starting point, I would say. I've been using this plan file for months now, nearly half a year, and it has a lot of, like.

good details, that I think are pretty general, across all code bases, but in essence, kind of what this planning prompt tries to capture is

how I want my system to evolve. So, like, how do I generally, like, think about code, and what are, like, my aesthetic choices or preferences for, like, evolving code? What are the things that I always want to be considered when I'm making code changes?

These are… might be more stylistic things, or kind of,

just, like, kind of general rules that I want the AI to follow. And then there's this kind of, like, formatting thing that I mentioned before. I really think it's important to optimize your plan file so that you can quickly review it. So that's why my plans are set up in this way, where, like, it starts at a very high level, and then I can kind of, like, keep reading and dig in at various levels of depth

Depending on, kind of like, what stage of iteration I'm in in developing this plan.

So, this is kind of, like, the introduction to my whole workflow. The first part is planning, and I'll go through, kind of, my workflow step-by-step, and…

the point and call thing is kind of weaved in here, so as you can see, I'm kind of, like, switching between pointing and calling. The call step is kind of just telling the AI what to do, and as you can see, I'm kind of, like, switching back and forth between kind of human, kind of.

Really directed, pointing

And then calling the AI to do something. So that's kind of, like, in a nutshell, what I'm doing. So the first step is to find the right context in your codebase. This is basically, like, finding the files that are relevant to the thing that you want to do.

I sometimes use AI to help me here, but I think it's actually really important to do this step by hand, because this

This is kind of, like, the core of what helps you build familiarity with your codebase, and have this, like, kind of intuitive.

like, kind of human understanding of, like, where everything is. So I think it's important to not lose touch with the code, and really make an effort to browse the code at some point in your workflow and, like, kind of understand what the little pieces are. So I like to

keep a measure of, like, how quickly I can find code that's relevant to a thing that I'm doing without using AI. So,

programmers from kind of the past have always been really good at this. Like, when you know a codebase really well, you just know where everything is. If you, like, if something is broken, you know exactly where to go to fix it. Or if you want to do something, like add a feature, you kind of know all the files that are relevant to that. So I try to, like, stay really sharp on that front.

The next part, after you've kind of, like, assembled the kind of, like, set of files that you know are relevant is to generate a plan. So in this plan generation, phase, I think it's really important to optimize for the quality of the plan. This is, like, really the…

the thing that generates the code is the seed of the code that is going to happen. So I always choose the best kind of, like, model. I don't kind of, like, optimize for speed, or… or cost. So these days, I'll use, like, Opus 4.5 or GPT codecs,

But the other element of this is that it's really important to take your time at this phase, to iterate a lot, and to make sure that you're really kind of happy with the plan, and, like, fully understand it, and have considered different possibilities.

I mentioned this before, but the plan is a form of simulating the code changes before they happen, so…

It's actually this kind of interesting way to do this form of leveraged thinking.

it's much faster to kind of iterate on a plan than to kind of, like, iterate on the actual code. So you can just, like, kind of iterate on this document and imagine the code changes, do some research, ask questions, without actually, like, making all of these changes in your code. You're just working in a single document. So this is, like.

for me, the, like, most powerful element of planning is that, like, I can just kind of, like, think in this single document. I can, like, generate multiple plans sometimes, and, like, evaluate different possibilities if I have, like, two different, like, ways to do something, I can, like, compare and contrast,

Or I can kind of, like, iterate really quickly on the plan without actually kind of, like, changing any code. Because once you're kind of changing code, you're, like, kind of mucking around and everything's, like, kind of coupled, and it's actually much slower to kind of, like, work in actual code changes than to kind of, like, work at this kind of plan level, this, like, kind of,

proto-code level. So that's been, in essence, like, the core transformation in my coding workflow is that I can kind of work at the plan level, and iterate really quickly at the plan level before

making the changes. And then when I have a good plan, basically, there's no ambiguity, in terms of, like, the code that's going to be generated. The plan is, like, detailed enough that,

generating the code is trivial. Like, the plan already contains all the code changes. So here, I just, like, take a fast model, and I just let it go.

I think in the past, I used to kind of do this more incrementally. I would, like,

implement one phase, kind of verify, move on to the next phase, verify. But these days, I actually kind of just let it go, and kind of, like, do the whole plan. And I think that it kind of, like, depends, I guess, on your level of confidence in the plan, and your… maybe, like, your level of familiarity with the code itself. I would say that if… if it's kind of, like, a new kind

feature, or, like, maybe, like, a newer, less familiar codebase to you, I'd still recommend, kind of, like, being fairly meticulous in this

implementation phase, and going step-by-step, running the tests, validating that the changes make sense, because, once you have, like, a lot of code that's been generated, it can be kind of hard to review what happened. So, this is your opportunity, as you're generating the changes, to do it in this, like, kind of step-by-step way, and review at each step.

Rather than kind of, like, trying to review the whole thing once it's been generated. So,

After that, there's this kind of review step. So I guess, like, yeah, incrementally reviewing is always a good idea. Once you have, like, the whole plan implemented, it's good to do kind of a final review stage. So this is kind of like classic pull request review,

There are good AI review tools, which we like to leverage. I personally like Reptile right now, that's what our team uses, Reptile.ai, or Reptile.com.

I like the style of Reptile, it goes fairly deep, and it just has some nice properties, and I think it has a good understanding of the code changes. But another kind of interesting thing here is that your plan file is also important context for the AI reviewer when it goes to review your pull request.

It's also really helpful context for humans that kind of look at your pull request, so often I will, like, share the plan file itself with the team, maybe in Slack, and we can, like, talk about it, and then we can, like, maybe dive into the bull request itself.

But the plan file is, like, a part of my pull request, so it's always there as a kind of summary of what's changed, before you kind of dive into the code changes themselves. So, it has all of these nice properties, and useful to include in the pull request, and useful to kind of include in your codebase, just as a kind of a record of what you've done.

And, I guess the extension of this that's kind of interesting is, like, once you have these plans, like, once you have a plan for a certain feature, if you want to do any follow-up, it's really easy to kind of just mention this plan file, which has all of this cached

context about those code changes, and use that in kind of follow-up work in the same area. So I find that it actually speeds up my process a lot to have this, like, kind of a set of plan files that I know are quite good.

Yeah, that's essentially it. I'm happy to kind of, like, go into more detail on this process. I think briefly before I kind of, like, open up to Q&A, I just want to talk about ZO. So, Zoho is the product that we're building, and

is actually a really good fit for building software with AI, but really kind of, like, working with AI in general, and I'll give a brief tour,

I think another thing to keep in mind as I'm giving this for is just,

ZO is very much kind of a team that is very kind of AI-forward, so we've built a lot of this functionality with quite a small, lean team, just two co-founders in the beginning, but it's quite a rich product with a lot of complexity through the hood.

So this is Zoe. Zoe, kind of here looks like just an AI chat, so you can kind of just chat with AI.

But, so you can kind of, like, talk about various things. I often have these kind of, like, test, conversations, but,

So, over here, you can chat with AI about really anything, but the cool thing about ZO is that under the hood, you get a full computer in the cloud. So, this is an AI that works with your own personal cloud computer, and ZO is essentially a cloud computer, which enables you to do lots of interesting things. So you have this whole

file system, that accompanies all of your AI chats, and this file system is just, like, the files on your cloud computer. So you can work with really any kind of file, which means you can do both coding, or kind of research, you can generate documents, you can work with documents and transform them.

here's an example of, kind of, built-in image generation on Zoe using NanoBanana. I kind of, like, here I transformed this, kind of, original, Benjamin Franklin image into one where he has a laptop, so this is original. And yeah, I just… I just chatted with Zoe, and Zoe made this, image. So you can kind of, like, work agentically this way, just chatting with an AI about any of your files, and Zoe can do a lot of things with files because

it knows how to write code and kind of work in this computing environment.

often I will, like, kind of use Zoho to work with different, kind of documents, so I can, like, chat with Zoe about a PDF, or I can kind of even generate PDFs or presentations,

Another kind of useful thing is we built a lot of, like,

ergonomic ways to interact with your AI. You can text it, you can email it, and ZO will just respond to you, and it's the same as kind of working in the chat, inside of the app itself. So, if I want to kind of update my website, or kind of do some research and write that to a document, I can just text my ZO, and it will do that. You can also connect to various services, so

I've connected my Zoho to, like, my email, my calendar, my Notion, and Zoho's able to kind of work with these connected tools that I already use, and do things on my behalf. So it has this kind of, like, assistant quality to it.

And, the other kind of useful feature of Zoho is it's always online, so it's this kind of…

cloud computer that's always connected to the internet, always online, always kind of ready to do work for you. And one thing you can do with that is you can create these automations that kind of run using the Zoho AI agent and do things for you. So here, I have this, like, task that will kind of check my calendar at the beginning of the week on Sunday night, and will send me this nice kind of email summary with

with kind of what's on my schedule, so that's quite, quite useful. Let's see, I'll just, like, kind of cover a bit more. There's a lot of depth inside of what Zoho can do, but, you can kind of host websites on Zoho as well.

Zoho, has, like, kind of a really nice, kind of ergonomic, built-in, kind of, like, vibe coding setup. And because it's a server, because your Zoho computer itself is a server, hosting is also built-in, so anything that you build on Zoho can instantly be hosted, from your server and kind of published online. So this is my co-founder's, like, kind of help dashboard,

Which, is a site that's built on top of his health data, which he kind of uploaded into his Zoho. So he's, like, synced his Apple Health data, his, like, 8Sleep, like, smart bed data into Zoho, and he kind of built this nice dashboard for himself.

On top of that. So that's kind of an example of what's possible with this form factor, where you can kind of

build sites on top of your files. This is kind of an example where you're kind of reading from some files, like some health data, but you could also, for example, create a form and, like, write the results to something in your workspace.

And kind of where this is going is quite interesting, I'd say.

So, Rob, my co-founder, has, like, uploaded a bunch of data. You can export your data from many sources these days, because of GDPR. It's quite easy, to just get your data from Google Takeout, or DoorDash, or wherever Amazon purchase history. It's hard to work with those exports, though. They're just, like, kind of zip files full of, like, data in strange formats. But with Zoho, it…

it's really easy to kind of just agentically ask AI to do things with that data, so this is kind of, kind of.

full view of… of Rob, over the last year, which is quite fun. It's kind of, you know, the wrapped season, so this is Rob's, Zoe

2025 wrapped, which covers, like, everything, his Google searches, his Clawed conversations, the YouTube videos he's watched. I found that he went on this, like, rabbit hole in August about running technique, and, it's… it's quite fun to…

to work with AI in this way, kind of, like, goes beyond coding projects to… to really just, like, kind of building personal, kind of, infrastructure, personal dashboards, automations, really anything.

But yeah, that's ZO. Check it out. It's ZO.computer. Anybody can sign up. It's a pretty generous free plan. You'll get 100 gigabytes of free storage if you just want to, like, store files on there, you can host stuff, and you can chat with, kind of, all of the models. Yeah, that is ZO.

And, yeah, remember, I've got some links, so follow me on our Discord if you want to chat after this, but yeah, let's kind of move to Q&A.

I'm just gonna open the chat. I think we have some questions in here. Yeah.

I guess let's start with live questions, then we'll go into the chat questions. If anybody has some live ones, happy to answer them.

Rocky | MediaCOM Inc

Rocky | MediaCOM Inc

31:36
It seems to me that… and besides certain aspects of it, it seems to me it's like Notebook LLM.

Ben Guo

Ben Guo

31:45
Yeah.

Rocky | MediaCOM Inc

Rocky | MediaCOM Inc

31:47
But in a more… on steroids, maybe.

Ben Guo

Ben Guo

31:51
Yeah, totally. I think it's a great way to think about it, yeah.

Rocky | MediaCOM Inc

Rocky | MediaCOM Inc

31:54
Yeah, yeah.

So I'm seeing it correctly.

Ben Guo

Ben Guo

31:57
Yep, yep, that's exactly right, yeah.

Yeah, if you like Notebook LM, I think you'll really enjoy so.

Rocky | MediaCOM Inc

Rocky | MediaCOM Inc

32:05
pretty, pulled it up on my browser.

Ben Guo

Ben Guo

32:08
Awesome, love it. Yeah, you'll have to try it out, let us know if you have any questions about it, and yeah, you'll get my, kind of, email and calendar, or various emails, so you can also chat with me about it.

Rocky | MediaCOM Inc

Rocky | MediaCOM Inc

32:19
I'd love to do that. I,

I'm a video producer, I've been doing corporate video for, I don't know, 20-some-odd years. Nice. Actually longer, but…

We'll keep it to 20+.

Ben Guo

Ben Guo

32:32
Awesome.

Rocky | MediaCOM Inc

Rocky | MediaCOM Inc

32:33
And, recently, just, finished up a 16-week course at John Hopkins University School of Engineering.

Ben Guo

Ben Guo

32:40
Oh, very cool.

Rocky | MediaCOM Inc

Rocky | MediaCOM Inc

32:41
Yeah, it was a really awesome course.

Huh.

Ben Guo

Ben Guo

32:44
that.

Rocky | MediaCOM Inc

Rocky | MediaCOM Inc

32:45
Yeah, I really, really enjoyed it. I'm getting,

A little bummed out that it's over, but…

Ben Guo

Ben Guo

32:52
That's awesome. Why not?

Rocky | MediaCOM Inc

Rocky | MediaCOM Inc

32:55
but I used AI to complete both my midterm and my final project.

Ben Guo

Ben Guo

33:02
Nice.

Rocky | MediaCOM Inc

Rocky | MediaCOM Inc

33:02
In both cases, got very high marks.

Ben Guo

Ben Guo

33:07
Nice.

Rocky | MediaCOM Inc

Rocky | MediaCOM Inc

33:07
And, and good, great comments, so…

I, I use GPT, Excuse me, Python GPT.

4.0, which is… has been great, but I know there's a lot of new tools that have arisen since then.

Ben Guo

Ben Guo

33:25
Very cool.

Rocky | MediaCOM Inc

Rocky | MediaCOM Inc

33:26
Yes.

Ben Guo

Ben Guo

33:27
Yeah.

Rocky | MediaCOM Inc

Rocky | MediaCOM Inc

33:27
I'm interested in checking this out, for sure.

Ben Guo

Ben Guo

33:29
Yeah, yeah, I love that. Yeah, I'm actually from Baltimore, so Bollywood Hopkins, great school.

Cool,

Yeah, I guess happy to kind of go through, kind of, the chat, if folks don't have live questions, but definitely feel free to jump in if you have any live questions.

Rocky | MediaCOM Inc

Rocky | MediaCOM Inc

33:50
Thank you.

Ben Guo

Ben Guo

33:51
Yeah, of course. So here from Robert Kumar, AI is becoming the foundation at the edge, and I work where ideas turn into scalable intelligence through LM's RAG. Yeah, cool. Collaboration. Yeah. Yeah, yeah, happy to connect. Yeah, definitely, hit me up on LinkedIn, I've got a link here.

I do use RAMP. RAMP is great.

Yeah, EML diagrams.

Yeah, you know, let me, let me jump to sharing my… my cursor, actually, so we can see everything.

Here, so UML diagrams, how do I think about them? We actually, we do… I guess we don't use, like, UML exactly, but, yeah, this is our codebase, and we… we do sometimes,

kind of…

make architecture diagrams, this isn't an example of one, but, I guess, like, plan files are one thing, but there's also this concept of, like, kind of, just, like.

more persistent, documentation in your codebase, and AI is really great at generating them, so, we'll often, like, kind of create these, overviews of things, which are kind of more persistent. We also have, like, agent MD files all over the place,

And, these are just, like, kind of peppered through our codebase, and we have, like, a pretty well modularized codebase, so a lot of our modules will include these kind of agent files, which are just kind of, like, living documentation for certain things. And sometimes they'll include diagrams, but it's, like, a more complex, kind of area,

Yeah, so that's kind of, like, my take on that question, I think.

Yeah, any follow-ups there?

I think this was from… Ilona?

Monir Imamverdi

Monir Imamverdi

35:37
I didn't ask the question, but I'm curious, how do you keep these up to date as the project grows and evolves?

Ben Guo

Ben Guo

35:44
Yeah.

Monir Imamverdi

Monir Imamverdi

35:44
Are these, like, a source of truth for you, or is it just, like, I need them now, they're useful now, and then you move on?

Ben Guo

Ben Guo

35:51
Yeah, so I think… I think of the plan files as this more, kind of ephemeral thing, and then these kind of agent files, or these kind of, like, documentation files scattered through the codebase, are… are living, and I try to keep them up to date, whenever I'm kind of, like, in the path.

And if you use, kind of like, this agent.md format, like, these will be picked up by your AI coding tool, so…

The planned file will often naturally include an update to any documentation files, if things are kind of, like, set up properly.

Monir Imamverdi

Monir Imamverdi

36:19
Yep.

Thank you.

Ben Guo

Ben Guo

36:21
Yeah. Yeah, for sure.

Yeah, and a question from you, actually. What if the plan is bad? Yeah,

Yeah, yeah, how do you kind of validate and iterate on a plan? I hate seeing an overly robust plan file, me too, that goes too deep into implementing something that isn't quite on the mark. I've gotten the habit of explaining the architecture of the system, verifying the system flow, including flow in the new context window, and then start planning.

Yeah, yeah, yeah. I'm happy to just walk through, like, yeah, kind of how I start, even happy to just share some chats. Let me see, well, I'll just, like, share my recent plan files, so…

In our codebase, kind of at the top, we have this agents folder, which is just, where we keep our plan files as a team. Everybody on the team has kind of different, a subdirectory here, and, yeah, here is, yeah, let me…

Take a look at this plan. This is a fairly complex plan that I did recently, at the beginning of the week.

So, I guess the plan is kind of like a PRD. It's like kind of a… I start with kind of a description of, like, kind of what I'm trying to do, as I kind of, like, formulate, the plan. And…

Yeah, I guess, I try to, like.

be pretty opinionated about, kind of, like, what I want to happen. So here, I had a pretty good idea of, like, you know, I need this, like, new capabilities API, I know that it needs to get wired in to the front end, that I need to set up, like, a React context for it, I know that's, like, connected to all these things I need to, like, pull into the API, so, kind of, like, the context here was, like, I wanted to, like, kind of

give the Zoho agent kind of, like, a better kind of, like, cached form of context about, like, all the things that are connected, by the user. So I kind of, like, started at this, like, super high level,

kind of, like, pointed to the various things that I knew were related, and then it generated a pretty good plan, but then I iterated a ton on this, and yeah, it's kind of interesting, like, you know, I always prefer to iterate

in the plan itself, before I, like, go on to implement it, because it just gets harder to iterate, after that. But sometimes, unavoidable, you'll always end up with, like, you'll start to implement, and then you'll, like, realize that you need to, like, change something or evolve

the plan. But I think if, like, you start from a good foundation, it's usually not too painful. Does that help? Happy to answer more questions, too.

Monir Imamverdi

Monir Imamverdi

38:51
Yeah, it does help. I think, I'm struggling with that. At my work, I'm… I've… I've started with, like, an existing massive codebase.

Ben Guo

Ben Guo

38:58
And so, as good as Claude is.

Monir Imamverdi

Monir Imamverdi

39:01
I don't have the domain knowledge that I am, like, a few months in, so…

Ben Guo

Ben Guo

39:04
Totally.

Monir Imamverdi

Monir Imamverdi

39:05
I do restart a lot.

Yeah. And the more I get familiar with the codebase, the more I realize, like, Claude's first instinct is not always the best.

like, push it and push it and push it, so I guess it's a problem with existing massive codebases.

Ben Guo

Ben Guo

39:19
Yeah.

Definitely. Yeah, I also find that…

the first instincts of AI are not great, and it, yeah, generally gets better as you get more familiar with the code and, are more in the loop. Yeah, and as I mentioned, I also… I don't like to kind of ask the AI to, like, research and just suggest something, like OneShot. I usually, like.

I have ideas already, and kind of try to guide it. But yeah, different, I guess, because I'm fairly familiar with our codebase. It is quite large. I think we have, like, half a million lines at this point, but…

Yeah. Yeah.

Monir Imamverdi

Monir Imamverdi

39:55
Cool. Thank you so much.

Ben Guo

Ben Guo

39:56
Yeah, for sure.

Cool, we've got this question from Shashi. How do you deal with model stubbornness? For example, there's a tendency to handle all possible errors and handle things with central valleys. Yeah, yeah, I have seen this as well. Yeah, and maybe, like, we'll forget. And the second question is, like, what is the optimal session length that you've found?

Yeah, so I guess on the first point, model stubbornness,

Yeah, I guess we have some lightweight rules. So rules are generally, like, the way to do this in MDF files, and that helps a lot.

Yeah, the kind of, like.

annoyances that it might do, like, there's some, like, patterns that you'll just, like, notice the AI always does. I think it's good to kind of, like, just keep adjusting your rules and kind of agent files to kind of really

kind of make it, like, super explicit that AI shouldn't do this. And we bake some of this into our plan file itself. I think, like, the plan stage is, like, where a lot of these, like, kind of…

bad patterns could be caught, I'd say. So, like,

if we looked, like, closer at our plan file, like, you know, some things that I don't like, that you can see in here, so, like, sometimes the AI will, like.

worry about, like, kind of, like, feature gating, or, like, kind of these, like, things that, like, aren't relevant to us, for example, or, like, kind of backwards compatibility, like, worrying about, like, migration. It'll just, like, kind of over-engineer stuff, by default, so, I really have tried to kind of guide it, to not do that. Like, we don't care about these things, don't do that. I really don't like when it, like, writes, like, integration tests that are, like, quite flaky.

Generally, like, the AI will often write pretty bad tests that are just, like, kind of trivial versions of testing, so often I, like, I want to be more intentional about, like, actually how to test the thing that I'm building, and I don't really like the, like, intuitions of the AI models these days, though I'm sure they will get better.

Yeah, in terms of optimal session length, I think the plan file is basically, like, the length of my chat. So I start a chat, and I, like, kind of work on a particular plan, and once I'm done with the plan, once I have a pull request, I'll end the chat, and I'm kind of, like, moving on to a new thing. So, always good to, like, keep your context clean.

And sometimes it is helpful, if you feel like your context is getting kind of messy, or, like, the AI is, like, forgetting stuff.

It's useful to just, like, cache stuff into the plan file and use that as, like, the starting point for a new chat, so if I'm doing something, like, especially complex.

Sometimes I'll, like, iterate on the plan file, in… over the course of several chats, but I think, like, nowadays, like, context management and compaction in these tools is, like, quite good, so you can get pretty far, with a single chat session.

Yeah, I guess, Shashi, any follow-ups there? Hopefully that was helpful.

Love that you're a Zoho user also, that's awesome.

Shashi Gowda

Shashi Gowda

42:55
That was great, thank you. Yeah, I think I need to make one of these rules files, that's what I need.

Ben Guo

Ben Guo

43:01
Yeah.

Shashi Gowda

Shashi Gowda

43:02
Yeah, because the patterns are, like, very…

the same. Sometimes it's like, when I'm writing Elixir, it's literally…

errors, and I cannot get rid of them.

Ben Guo

Ben Guo

43:13
Yeah, that makes sense. It's cool they're using Elixir, actually, that's awesome. Yeah, love that. Yeah, Elixir's a great language. Yeah, good feature request, too, adding multiple phone numbers. I'll send that to our team right now, actually. Yeah, I'll just go to our channel.

Cool.

Shashi Gowda

Shashi Gowda

43:30
Then we can have our budget on the Hanzo.

Ben Guo

Ben Guo

43:33
Yeah.

Shashi Gowda

Shashi Gowda

43:34
Yeah.

Ben Guo

Ben Guo

43:35
Yeah, I love that use case. Yeah, we've had that feature requests from other people as well. Yeah, yeah, happy to do that. Yeah, it should be fairly straightforward.

Shashi Gowda

Shashi Gowda

43:42
Thank you.

Ben Guo

Ben Guo

43:43
Yeah, totally.

Okay, from Dee, any tips to be able to come up with proper plan docs that work for non-technical folks? Yeah, so this is a common question that comes up for me. Like, I'm obviously coming at this from kind of a more, like, engineering background,

But, yeah, if you don't have that context, how do you kind of, like, guide the AI, as intentionally? I do think plant files

can help. I think, like, this is where, kind of, I would say customizing your rule prompt, is really the way to go. So, this is your opportunity to tell the AI, like.

you know, I'm not technical, I don't know a lot, explain things to me in more detail, and kind of, like, help me understand exactly what's happening, and, like, maybe even, like, help me understand some alternatives in non-technical language,

Which I think can be a really good way to learn over the course of a plan file. You'll probably find, if you do that, that your plan files are much longer, and maybe, like, don't include as much, like, kind of, like, nitty-gritty code changes. Or, like, they still should include the code changes, but, like, maybe you won't understand them, or, like, maybe they'll have, like, more descriptions about everything.

So, that would be my recommendation, is, like, still use these planned files, and… and just, like, kind of tell the AI that you're not technical, and…

kind of play with the format, see what comes out of it, and kind of adjust it until you feel like you're in a place where, like, you can, like, really look at a plan file, and maybe it's just at a high level, like, kind of understand

What's about to change?

Yeah.

Oh, yeah, Moni, bailing when Claude starts compacting, yeah.

Oh, yeah, so, yeah, the plan code changes prompts… I'll just post this in the chat while I'm here, so…

this is, like, a prompt that you can install inside of your Zoho. You can, like, kind of get this file inside of Zoho, but you can obviously use this with any agent. And yeah, it's essentially a Markdown file that includes all these instructions.

Yeah,

So, I'd say that, yeah, what… how do I use it? Like, custom instructions file, or a custom system prompt? I guess the way that I use it in cursor, is I, use it as a cursor rule. Different AI setups have different versions of this, but basically, like, this rule applies to all RST files,

this is just kind of in the weeds, but I personally prefer the look of RST files. This is really personal preference, but

RCT comes with, like, some more formatting details than Markdown, so I find that it can be a little bit nicer to look at, but Markdown is fine, too. But yeah, I guess the answer here is it's kind of equivalent to, like, just a prompt, which gets invoked whenever I want to make a plan, so my workflow would be to, like.

first create a new plan file in our codebase, or in Zoho, or kind of wherever you're working, and then kind of, like, start working with AI with this planning prompt in that plan file.

Yeah,

Yeah, yeah, yeah. I'd say, Monia, that, like, yeah, kind of working with diagrams in this context is super useful. In Zoe, if you, like, if ZO makes a plan file with diagrams, you'll actually, like, see them, like, it won't be in this, like, kind of…

text-only format, which can be quite nice, so… I actually sometimes do plan code changes inside of Zoho, just because it's, like, somewhat nicer to, like, look at the Markdown file. Yeah.

Monir Imamverdi

Monir Imamverdi

47:22
That's really cool.

Ben Guo

Ben Guo

47:25
Yeah, cool. Any other questions from the live audience? I think that's everything in the chat.

Monir Imamverdi

Monir Imamverdi

47:37
Hey, quick aside, I'm wondering if you've embraced the new cursor agent view.

Ben Guo

Ben Guo

47:41
Oh, yeah, I don't like it, honestly.

Monir Imamverdi

Monir Imamverdi

47:44
Okay.

Ben Guo

Ben Guo

47:45
Yeah, yeah, it's… I mean, it's basically the same,

Monir Imamverdi

Monir Imamverdi

47:50
But I guess it's more of a familiarity thing, like, I'm just not used to it.

Ben Guo

Ben Guo

47:54
Yeah, I do like doing parallel chats, so I was always doing that, and this is just a different UI for that, I guess.

Oh yeah, what don't you like about it? I'm Curious?

Monir Imamverdi

Monir Imamverdi

48:05
I feel like I don't have enough control.

Ben Guo

Ben Guo

48:07
Yeah, yeah, same.

Monir Imamverdi

Monir Imamverdi

48:08
I'm so used to the file view, but it's an entirely new way of coding, yeah.

Ben Guo

Ben Guo

48:12
Yeah, yeah, I agree. Yeah, I miss the old thing. You can kind of get back to it, or… yeah, but it's… yeah, it's a little…

Monir Imamverdi

Monir Imamverdi

48:19
That's true.

Ben Guo

Ben Guo

48:20
Yeah.

Yeah.

Monir Imamverdi

Monir Imamverdi

48:22
Cool.

Ben Guo

Ben Guo

48:24
Nice. Yeah, that looks like another message, yeah.

Yeah, yeah, like, how does Zoho work under the hood? There's this question I'm often amazed at how good Zoho chats are at knowing everything on my Zoho, including other chats, without having to load the context. Yeah, that's a good question.

And this kind of gets into just, like, kind of building agents and, like, kind of agent design, which is just… just tricky. It's, like, kind of a new kind of engineering, I'd say, and it's all about, kind of, context engineering, like, kind of how do you get the right context into the model at the right times? So I can kind of, like, give a high level of, like.

how we think about that, so,

Yeah, the way that Zoho works is you can select a file, and, like, this file will automatically be in the context, sorry, I'm just moving around some Zoom stuff. So you can see here that, like, Zoe knows that, like, you know, I'm looking at this chess file, and, we also kind of provide the agent with just a high-level summary of your workspace,

So, the agent kind of, like, knows about high level, like, kind of what's on your computer, and, we're kind of, like, working on the, like, deeper kind of memory system, but, so sometimes has, like, fairly good knowledge of things like past chats. It's not great right now, I'd say. I have a lot to improve there, but, the goal is really to kind of, like.

give you this persistent state. And I guess this is actually related to client files, so worth talking about. So, when you, like, work with AI chat apps,

often it's, like, really annoying to, like, kind of scroll through this long list of, like, chats and, like, find your context again on whatever you're talking about. So is, in kind of a simple sense, a way to, like, break out of the chat and kind of, like, manage your context in the form of files on a computer, which I think is actually a really good mental model for working with AI.

And, you know, I will, like, often just generate, notes, in my ZO. These are, like, you know, similar to plan files, they're just, like, kind of, like, cached, like, kind of markdown context about, like, whatever I'm working with, and, it can be super useful to kind of just iterate this way using AI.

Yeah, in terms of, like, more of the technicals about it, yeah, so…

I guess we give Zoe, the agent… so what we're looking at here is, like, my own human workspace. Zoe can work with this as well, and kind of, like, make files in here. ZO also gets its own workspace, in another section of your computer, and Zoe gets to kind of, like, do things in there over the course of a chat. It can, like, kind of take notes on what's happening, and it can, like, make, like, kind of scratch files,

which I think, like, generally helps with the memory problem. Like, I think memory for AI

Really boils down to files in a lot of these systems, and it's really kind of about file management and kind of, like, surfacing the right stuff at the right time.

Yeah, hopefully that was somewhat helpful at a high level.

Yeah, nice album. What is the best practice for context monitoring?

Yeah.

Yeah, yeah, that's a good question. So yeah, generally, this applies to really every AI chat that you work with. So, the context of these things is still limited. It's growing, it's like, you know, maybe, like, a million tokens at a max, and a million tokens is a lot. Like, you can, I think, like.

I forget the exact, like, metric, but it's, like, you can have, like, a whole novel in there, essentially, like, at some reasonable number of pages. So context is large, but, like, there's also a lot happening, so, like, for every, like, tool that the AI calls,

These are kind of, like, feeding into the context and, like, kind of part of the conversation history.

So… Managing context is important. I'd say that, like, you know, as your chat grows,

AI's, like, kind of, past context will, like, shrink, so,

you can, like, think of it as this kind of moving window, and different tools, including Zoho, will, like, kind of try their best to, like, what they call compact, the context, and, like, maybe, like, summarize little bits of the past, and, like, put them into the kind of rolling window. They will also, you know, like, kind of shrink down, like, really large pieces of context, into kind of, like, smaller chunks, and maybe sometimes, like, point

to, kind of, like, a file to look up the whole context. So, that's kind of, like, generally how

context management works and, like, the mental model for it, and yeah, the retry here, the way that we've done it in Zoom, and I think this is, like, kind of how many things work, is, if you kind of, like, go into a previous message and then send it,

that will, like, erase everything that followed here, and it'll kind of, like, branch the conversation and start it from this point in time. So that's kind of how to think about this,

retry thing? But yeah, so, like, if I, like, go up here and retry, that would kind of, like.

start this conversation again, or, like, kind of, like, fork it, essentially, and start it from this point in the conversation. And I think, like, most AI tools have versions of this, like, in cursor as well. You can see they have this kind of, like, way to start from here again.

Yeah.

Yeah, Alvin, was that helpful?

I don't know if I'm still… okay, cool, sweet, great.

Yeah, any other kind of questions here? Happy to talk about anything, you know, whether it's other AI coding techniques, specific tools, though.

Monir Imamverdi

Monir Imamverdi

54:12
I have a question about Zoe, sorry, and I keep asking questions, it's just super interesting.

Zoho's really cool. It seems like this headless, or GUIless, agentic, like,

computer system. I'm trying to understand, like, what differentiates this between this and other, like, online building tools, and yeah, I'm curious, like, what… how you explain when someone asks you, like, what's the difference between this and Lovable and Base44 or whatever? Yeah. The idea of, like, having a whole computer is, like, really cool.

Ben Guo

Ben Guo

54:43
Totally. Yeah, that's a good question. So, sometimes I look at this diagram,

So we have, sorry, loading this a little bit, I like to think about the…

AI space, as basically having, like, two worlds of tools. There's, like, tools that build for you, like Cursor and Lovable and all these things, and then there's, like, kind of these more assistant tools, like ChatGPT, Notebook.com, even, I'd categorize in this kind of, like, assistant tool. It's, like, things that you can kind of ask questions to.

And these worlds really have not merged, so if you want to

kind of, like, build something that also has all of this context about you, and has, like, a persistent kind of, like, state, and maybe even file system, that's really hard in this current world, because these assistant tools often aren't good at building, or, like, you know, they can't, like, directly build stuff and host it for you. While these building tools, they often, like, don't have all of your context, they're just, like, kind of scoped to a single project,

So that's… that's kind of, like, where Zoho came about.

In the past, like.

back in, like, oh, when I was, like, first starting my engineering career back in college, like, people ran a lot of stuff on single machines, on single boxes, and that is very much still possible today. You can do a lot with these, like, very, kind of, beefy,

data center machines, so with Zoe, give you a full server. You don't have to, like, even understand the server, but that enables you to do many things, including, like, hosting sites, running automations, and also, even just, like, kind of hosting, custom, self-hosted services. So, like, if you want to, like.

my co-founder, he has, like, all of his, like, movies and music inside of Zone. He's run the Plex server.

to, like, watch stuff from, like, his Apple TV.

Monir Imamverdi

Monir Imamverdi

56:36
I was just thinking about that, yeah, okay.

Ben Guo

Ben Guo

56:38
Yeah. Yeah, yeah. Oh, wow.

Yeah.

Monir Imamverdi

Monir Imamverdi

56:42
Have you had to do any, like, computer use?

Tooling…

Ben Guo

Ben Guo

56:46
Yeah, good.

Monir Imamverdi

Monir Imamverdi

56:47
I don't know what the state of the art for that is.

Ben Guo

Ben Guo

56:49
Yeah, totally. Yeah, I've been kind of, like, experimenting with it for a while. I've kind of been owning this, Zoe's browser feature, so we do give Zoe access to its own browser, and you can also operate this browser and, like, you know, log into things.

And I've tried some computer stuff, actually, where, like, Zoe actually, like, looks around and navigates in the browser. I think it's,

it's quite slow, which is why we haven't, like, released it to users yet. It's both slow and expensive, because you're, like, kind of, like, passing all of this.

like, every frame of, like, the movement kind of has to go into the model's context, so, I haven't found, like, a good sweet spot there yet, where it, like, feels fast and is, like, fairly cheap, but, yeah.

I think a lot of tools do enable this, but my thesis is that… my hypothesis is that they're just, like, kind of burning money on it, because I don't think it is very affordable these days.

Monir Imamverdi

Monir Imamverdi

57:46
I'm with you. Cool. Thank you again.

Ben Guo

Ben Guo

57:48
Yeah. Yeah, totally.

Yeah.

Cool. If there are no other questions, we can kind of just end it. This is my personal site, host on Zoho. I haven't updated in a while, but, I guess this is, like, a final example of, like, a cool, easy thing that's possible with Zoho. So, my personal website, it's hosted live on my Zoho. You can go look at it right here.

And, yeah, so it's… this is running on my ZoSurfer, and, one, like, really nice kind of ergonomic thing about this is, like, I don't need, like, a CMS, or anything fancy, I just have, like, these Markdown files in my workspace, that are just…

my site. So, you know, those things that I was looking on, those are just these, these note files inside of my Zoho workspace. Just another place. So it's really, really easy to, like, serve any file as part of a site that you build on Zoh, or write to

right back to your workspace. So, here I have this, like, pretty silly guestbook, and, you know, people can just, like, leave notes.

gets, written to, like, a database, on my ZO.

And then I… I had this, like, kind of Zoho agent script that… this automation that I had set up that would just, kind of draw an ASCII background based on all the guestbook responses. So you can do kind of interesting, I guess, like, more living website kind of things, which are…

Quite fun.

No.

Cool. Awesome. Well, thank you, everybody, for joining. This was really fun. And yeah, yeah,

try out Zoe, join our Discord if you want to chat. And yeah, thanks for coming.

Monir Imamverdi

Monir Imamverdi

59:38
Thanks, man, super cool. Appreciate your experience.

Ben Guo

Ben Guo

59:41
seal.

Shashi Gowda

Shashi Gowda

59:43
Thank you, bye.

Ben Guo

Ben Guo

Bye.
