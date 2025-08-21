import tkinter as tk

root = tk.Tk()
root.title("Affaan Calculator")
root.geometry("300x380")

display = tk.Entry(root, font=("Arial", 18), bd=8, relief="sunken", justify="right")
display.pack(fill="x", padx=10, pady=10)

def press(val):
    display.insert("end", val)

def clear():
    display.delete(0, "end")

def equals():
    try:
        result = str(eval(display.get()))
        display.delete(0, "end")
        display.insert(0, result)
    except Exception:
        display.delete(0, "end")
        display.insert(0, "Error")

btns = [
    ('7','8','9','/'),
    ('4','5','6','*'),
    ('1','2','3','-'),
    ('0','.','=','+'),
]
for row in btns:
    frame = tk.Frame(root)
    frame.pack(expand=True, fill="both")
    for text in row:
        cmd = (lambda t=text: equals()) if text=='=' else (lambda t=text: press(t))
        if text == 'C':
            cmd = clear
        b = tk.Button(frame, text=text, font=("Arial", 16), command=cmd)
        b.pack(side="left", expand=True, fill="both", padx=2, pady=2)

clr = tk.Button(root, text="C", font=("Arial", 16), command=clear)
clr.pack(expand=True, fill="both", padx=10, pady=6)

root.mainloop()
