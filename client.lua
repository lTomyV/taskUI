RegisterNetEvent("taskUI:hideTaskUI")
AddEventHandler("taskUI:hideTaskUI", function()
    SendNUIMessage({
        key = "closeUI"
    })
    SetNuiFocus(false, false)
end)

RegisterNetEvent("taskUI:newMessage")
AddEventHandler("taskUI:newMessage", function(title, message)
    SendNUIMessage({
        key = "newMessage",
        title = title,
        text = message
    })
    SetNuiFocus(false, false)
end)

RegisterNetEvent("taskUI:newTimedMessage")
AddEventHandler("taskUI:newTimedMessage", function(title, message, time)
    time = time * 1000
    SendNUIMessage({
        key = "newTimedMessage",
        title = title,
        text = message,
        time = time
    })
    SetNuiFocus(false, false)
end)