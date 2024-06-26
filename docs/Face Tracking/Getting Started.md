---
sidebar_position: 1
---

## How is your face moving like that?

If you do want to use face tracking in VR, you do need a compatible **headset**! For my setup, I use the **Quest Pro**. (Thankfully, I made a guide [here](https://hantnor.github.io/HanDocs/docs/Face%20Tracking/Beginner/Quest%20Pro%20Setup)!)

## Blendshapes, OSC, What's going on?!

This may all be overwhelming for a first-timer, and that's completely okay! I was in the same boat when I first got my headset, and I had slammed my head onto my desk trying to understand it all. Here's a rundown of some common terms you may run into, whether they're here or elsewhere:

- FT
  - This just stands for **Face Tracking**. It's a useful abbreviation!
- OSC
  - This stands for **Open Sound Control**. It's a protocol originally intended to allow communication between audio devices and controllers for musical performances, but has capabilities far beyond that! (s. VRChat Docs)
  - In short, this is the "messenger" between external programs and VRChat.
- Parameters
  - These are the true/false statements, sliders, and specifically defined data for your avatar! This can drive animations, **blendshapes**, and toggles!
- Blendshapes/Shape Keys
  - These are sliders that move specific polygons on your avatar (0-100). (eg. a "Jaw Open" blendshape would move the polygons to open your jaw)

## Getting Started

For anything with **Face Tracking (FT)**, you need some prerequisite add-ons to make everything work as smoothly as possible. This can include (but not limited to):

- Face Tracking Templates
  - These are used in Unity, and are responsible for controlling **blendshapes** on your avatars. They come with the proper parameters for receiving **OSC** input, and preset animations to drive all the shapes on your model!
- Parameter Mergers
  - This most notably refers to [**VRCFury**](https://vrcfury.com), a popular tool used to non-destructively automate and simplify the process of building avatars. 

### <u>What you'll need</u>

- The latest version of **Unity Editor** (as of writing this, it is [2022.3.6f1](https://unity.com/releases/editor/whats-new/2022.3.6) and the **VCC** will help with installation.)
- [VRChat Creator Companion (VCC)](https://vrchat.com/download/vcc)
- My [patcher](https://github.com/hantnor/FTPatcher). (Full list of currently supported avatars [here](https://hantnor.gumroad.com).)
- A premade avatar base. (If you are using my patcher, use one of the premade supported avatars in the above list!)
