---
id: 'matmul'
category: 'PROJECT'
title: 'Matrix Multiply'
subtitle: 'HPC Fundamentals'
---

This final project combines Mojo's high-performance capability with Python's library ecosystem. You are using NumPy to perform matrix operations, but running it within a Mojo environment that can optimize the entire pipeline.
```mojo
from std.python import Python

def main() raises:
    var np = Python.import_module("numpy")
    
    # Use Python.evaluate for reliable nested list creation
    var a_list = Python.evaluate("[[1, 2], [3, 4]]")
    var b_list = Python.evaluate("[[5, 6], [7, 8]]")
    
    var A = np.array(a_list)
    var B = np.array(b_list)
    var C = np.matmul(A, B)
    
    print("Result Matrix:")
    print(C)
```
