export function verTriangulo(l1, l2, l3) {
    if (l1 === l2 && l2 === l3) {
        return "Equilátero"; 
    } else if (l1 === l2 || l1 === l3 || l2 === l3) {
        return "Isósceles"; 
    } else {
        return "Escaleno"; 
    }
}
