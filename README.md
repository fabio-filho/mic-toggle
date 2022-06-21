# mic-toggle
A Linux Mic Toggle.

### How it works
A html page allow the user press a button that, via local **node** server running on linux, mute or unmute the headphone;

### Structure
- Node server - must run on the pc that has the headphone connected;
- Local html page: this can be running using VSCode + Live Server Plugin;

**Run the local api**
`npm run start`

**Run app** 
- Open VSCode; 
- Install the Liver Server extension (search for it on the plugin store);
- Open the index.html file;
- On the bottom of VSCode, there will be a bottom called "Go Live";

--

## Demo - Using on the cellphone

Press and hold to active the voice.

### Pressed - Mic active
#### Cellphone
![photo_2022-06-21_15-51-02](https://user-images.githubusercontent.com/4037226/174876001-cc283fc1-0330-4902-83a9-c4093ac5caa0.jpg)
#### Desktop
![Screenshot from 2022-06-21 15-59-17](https://user-images.githubusercontent.com/4037226/174877410-79705cf0-ceed-48e8-b070-6d4fe3d29377.png)


#### Released - Mic deactive
#### Cellphone
![photo_2022-06-21_15-51-00](https://user-images.githubusercontent.com/4037226/174876012-7191a086-37c0-4b39-99ff-a09ff2aab750.jpg)
#### Desktop
![image](https://user-images.githubusercontent.com/4037226/174877370-8bbf8908-fd0e-4cd2-98bf-0099f025df8a.png)

