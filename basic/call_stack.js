function a(){console.log("a()");b()};
function b(){console.log("b()");c()};
function c(){console.log("c()");d()};
function d(){console.log("d()");e()};
function e(){console.log("e()")};


function x(){console.log("x()");y()};
function y(){console.log("y()");z()};
function z(){console.log("z()")};
setTimeout(x, 0);
a();
console.log("end of main");

/**
 * Output:
 * a()
b()
c()
d()
e()
end of main
x()
y()
z()

 */