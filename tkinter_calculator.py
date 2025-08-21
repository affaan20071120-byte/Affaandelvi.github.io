# Tkinter Calculator (Python) — download version
import tkinter as tk
root = tk.Tk(); root.title("Calculator")
expr=''
def press(ch):
    global expr
    if ch=='C': expr=''; var.set(''); return
    if ch=='=':
        try: var.set(str(eval(expr or '0'))); expr=var.get()
        except: var.set('Error'); expr=''; return
    else: expr+=ch; var.set(expr)
var=tk.StringVar()
tk.Entry(root, textvariable=var, font=('Arial',18), justify='right', bd=6).grid(row=0,column=0,columnspan=4, sticky='nsew', padx=6, pady=6)
buttons=['7','8','9','/','4','5','6','*','1','2','3','-','C','0','.','+','=']
r=1;c=0
for b in buttons:
    tk.Button(root, text=b, font=('Arial',16), command=lambda x=b:press(x), width=4, height=2).grid(row=r,column=c, padx=4, pady=4, sticky='nsew')
    c+=1
    if c==4: c=0; r+=1
for i in range(5): root.grid_rowconfigure(i, weight=1)
for i in range(4): root.grid_columnconfigure(i, weight=1)
root.mainloop()
