import tkinter as tk

def click(event):
    global expression
    text = event.widget.cget("text")
    if text == "=":
        try:
            result = str(eval(expression))
            screen_var.set(result)
            expression = result
        except Exception as e:
            screen_var.set("Error")
            expression = ""
    elif text == "C":
        expression = ""
        screen_var.set("")
    else:
        expression += text
        screen_var.set(expression)

root = tk.Tk()
root.title("Calculator")
expression = ""
screen_var = tk.StringVar()

screen = tk.Entry(root, textvar=screen_var, font="lucida 20 bold")
screen.pack(fill="x", ipadx=8, padx=10, pady=10)

buttons = [
    ["7", "8", "9", "+"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "*"],
    ["0", "C", "=", "/"]
]

for row in buttons:
    frame = tk.Frame(root)
    frame.pack()
    for btn in row:
        b = tk.Button(frame, text=btn, padx=20, pady=20, font="lucida 15 bold")
        b.pack(side="left", padx=5, pady=5)
        b.bind("<Button-1>", click)

root.mainloop()
