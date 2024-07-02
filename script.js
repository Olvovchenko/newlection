let turn = -30;
let i = 0;
let year = [
  { old: 1, planet: `Марс` },
  { old: 2, planet: `Юпітер` },
  { old: 3, planet: `Сатурн` },
  { old: 4, planet: `Сатурн` },
  { old: 5, planet: `Юпітер` },
  { old: 6, planet: `Марс` },
  { old: 7, planet: `Венера` },
  { old: 8, planet: `Меркурій` },
  { old: 9, planet: `Луна` },
  { old: 10, planet: `Сонце` },
  { old: 11, planet: `Меркурій` },
  { old: 12, planet: `Венера` },
];

$(document).ready(function () {
  $("button").click(function () {
    $(".old").empty();
    $(".old").append(`${year[i].old}р Управитель року ${year[i].planet}`);
    $(".natal1").animate(
      { deg: `${turn}` },
      {
        duration: 50,
        step: function (now) {
          $(this).css({ transform: "rotate(" + now + "deg)" });
        },
      }
    );

    turn -= 30;
    i = i < 11 ? i + 1 : 0;
    console.log(i);
  });
});
