a=input('Enter expression (e.g., 2+3*4): ')
try: print(eval(a))
except Exception as e: print('Error:', e)