Archea is a 3D Falling Sand Simulation I am developing because I am bored and love falling sand simulations.
I also needed an excuse to learn graphics programming and to make a custom game engine.
This project has been a bit of a challenge so far and has been through multiple rewrites. See [Journey Of Archea](#journey-of-archea)

You can watch me work on this project live on [Twitch](https://twitch.tv/insberr).  
You can watch the stream VODs on my [YouTube](https://www.youtube.com/playlist?list=PLegENDHYPkX28wjNpFBd16ikRTgV8ekCf).  
If you don't feel like watching the streams (I don't blame you, they are long), you can watch my [dev log videos instead](https://www.youtube.com/playlist?list=PLegENDHYPkX0YnBPZnPjTTeSgQtDirN8P)

## Demo Video
TODO

## Wording
1. Particle - Refers to a voxel which is simulated (i.e. sand, water)
2. Voxel - The cubes you see in the world, duh


## Engine Design
Talk about the engine design

## Simulation
Talk about how the simulation works


## Journey Of Archea
Here is the journey I went through and some history LOL.

I started out trying to make a 2D falling sand simulation in Godot using C# with a friend.
We made some progress but kept dealing with performance issues. We stopped working on it shortly after.

Later I started trying to make a 3D simulation in rust using the [Bevy](https://bevyengine.org/) game library.
I quickly learned two things:
1. I needed to make my own engine specifically for the simulation.
2. Rust wasn't working well for me. I needed to switch to a language I was more comfortable with.

So I decided to switch to c++ and start learning graphics programming.
I started out by following a [YouTube tutorial](https://www.youtube.com/watch?v=_4FArgOX1I4&list=PLqCJpWy5Fohd3S7ICFXwUomYW0Wv67pDD)
to learn directx11. ([My learning_d3d11 repository](https://github.com/insberr/learning_d3d11)).

I started making a [2d falling sand game in directx11](https://github.com/insberr/2d-falling-sand) and quickly made it 3D because I am impatient.  
Then decided my code was too messy.  
I started looking for ways to render the particles and discovered ray marching. Ray marching seemed interesting
so I started experimenting with it in shader toys.  
I started learning opengl and messing with ray marching. Once I had a handle on that I came back here (to Archea)
and started rewriting it in c++.  
3 Days later I have a basic engine working, ray marching working, opengl working, ImGui set up, and a very basic simulation of particles.

I have been spending way too much time working on the shader. I really need to start working on the
simulation itself.
