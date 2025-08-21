import tkinter as tk
root = tk.Tk(); root.title("Affaan Calculator")
e = tk.Entry(root, justify='right', font=('Arial',18)); e.grid(row=0, column=0, columnspan=4, sticky='nsew')
btns=['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+','C']
def press(k):
    if k=='C': e.delete(0,'end'); return
    if k=='=':
        try: e.insert('end', '='+str(eval(e.get())))
        except Exception: e.delete(0,'end'); e.insert(0,'Err')
        return
    e.insert('end', k)
for i,k in enumerate(btns):
    b=tk.Button(root, text=k, font=('Arial',16), command=lambda k=k: press(k))
    r=1+i//4; c=i%4; b.grid(row=r,column=c,sticky='nsew', padx=2, pady=2)
for i in range(4): root.grid_columnconfigure(i,weight=1)
for i in range(6): root.grid_rowconfigure(i,weight=1)
root.mainloop()