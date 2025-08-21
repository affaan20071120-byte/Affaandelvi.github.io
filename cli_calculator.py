# CLI Calculator
def calc():
    print('1) Add  2) Sub  3) Mul  4) Div')
    op=input('Choose: ')
    a=float(input('A: ')); b=float(input('B: '))
    if op=='1': print('Result:', a+b)
    elif op=='2': print('Result:', a-b)
    elif op=='3': print('Result:', a*b)
    elif op=='4': print('Result:', 'Err div0' if b==0 else a/b)
    else: print('Invalid')
if __name__=='__main__': calc()
