arr = [('E5',8),('B4',4),('C5',4),('D5',8),('C5',4),('B4',4),('A4',7),('N',1),('A4',4),('C5',4),('E5',8),('D5',4),('C5',4),('B4',7),('N',1),('B4',4),('C5',4),('D5',8),('E5',8),('C5',8),('A4',6),('N',2),('A4',12),('N',8),('D5',8),('F5',4),('A5',8),('G5',4),('F5',4),('E5',7),('N',1),('E5',4),('C5',4),('E5',7),('N',1),('D5',4),('C5',4),('B4',7),('N',1),('B4',4),('C5',4),('D5',8),('E5',8),('C5',8),('A4',7),('N',1),('A4',12)]
arr = [('DS4',4),('FS4',4),('GS4',4),('AS4',4),('FS4',4),('N',4),('GS4',4),('AS4',4),('GS4',4),('FS4',4),('F4',8),('DS4',8),('CS4',8),('N',8),('DS4',8),('CS4',4),('DS4',4),('FS4',4),('F4',4),('DS4',3),('N',1),('DS4',4),('D4',8),('C4',4),('D4',4),('DS4',8)]
parsed_obj = {}
n_s_flags = {}

for s in arr:
    if not s[0] in parsed_obj and s[0] != "N":
        parsed_obj[s[0]] = [0]
        n_s_flags[s[0]] = "n"

n_s_flags[arr[0][0]] = "s"
parsed_obj[arr[0][0]] = []

print(parsed_obj)
for s in arr:
    code = s[0]
    duration = s[1]
    for key in parsed_obj:
        if key == code:
            print()
            parsed_obj[key].append(duration)
            parsed_obj[key].append(0)
        else:
            parsed_obj[key][-1] += duration
for key in parsed_obj:
    if parsed_obj[key][-1] == 0:
        print(parsed_obj[key])
        parsed_obj[key].pop()
        print(parsed_obj[key])
for key in parsed_obj:
    parsed_obj[key].insert(0, n_s_flags[key])
            
print(parsed_obj)
