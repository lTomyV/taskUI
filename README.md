# taskUI
Simple UI for tasks and missions. 
Timed and permanent messages.

# DOCUMENTATION:
Use client events to interact with the UI from any resource.

```taskUI:newMessage``` Shows a permanent message until "taskUI:hideTaskUI" is called
1st arg = Title
2nd arg = Description

```taskUI:newTimedMessage``` Shows a timed message for the specified amount of seconds
1st arg = Title
2nd arg = Description
3rd arg = Time (in seconds)

```taskUI:hideTaskUI``` Hides the UI inmediatly, no matters if its a permanent or timed message
no args

# Colabs
Any colaborators to  improve the styles or code will be apriciated! Just send a PR
