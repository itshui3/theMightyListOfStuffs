# given an array and two idx, a start and a stop
# perform a drag operation from start to stop

exArr = ['moveTo', 'two', 'three', 'four', 'here', 'five']

def dragOp(arr, dragID, dropID):
    copyArr = arr[:]

    carry = copyArr[dragID]
    copyArr[dragID] = None

    start, end = None, None
    if dragID < dropID:

        start = dragID
        end = dropID

        for i in range(start, end):
            copyArr[i], copyArr[i+1] = copyArr[i+1], copyArr[i]

        copyArr[dropID] = carry

    elif dropID < dragID:

        start = dropID
        end = dragID

        for i in range(end, start, -1):
            copyArr[i], copyArr[i-1] = copyArr[i-1], copyArr[i]

        copyArr[dropID] = carry

    return copyArr

print(
    dragOp(exArr, 3, 1)
)