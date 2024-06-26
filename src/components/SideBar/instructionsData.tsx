import { Typography } from "@mui/material";

const instructions: JSX.Element[] = [
  <>
    <Typography>
      Добро пожаловать в Flexbox Froggy. Игра, в которой тебе нужно помочь
      лягушонку Фроги и его друзьям написанием CSS кода! Направь этого лягушонка
      на лилию справа используя свойство,<strong>justify-content</strong>,
      которое выравнивает элементы горизонтально и принимает следующие значения:
    </Typography>
    <ul>
      <li>
        <strong>flex-start:</strong> Элементы выравниваются по левой стороне
        контейнера.
      </li>
      <li>
        <strong>flex-end:</strong> Элементы выравниваются по правой стороне
        контейнера.
      </li>
      <li>
        <strong>center:</strong> Элементы выравниваются по центру контейнера.
      </li>
      <li>
        <strong>space-between:</strong> Элементы отображаются с одинаковыми
        отступами между ними.
      </li>
      <li>
        <strong>space-around:</strong> Элементы отображаются с одинаковыми
        отступами вокруг них.
      </li>
    </ul>
    <Typography>
      Например, <strong>justify-content: flex-end;</strong> сдвинет лягушонка
      вправо.
    </Typography>
  </>,
  <>
    <p>
      Используй
      <strong>justify-content</strong>, еще раз, чтоб помочь этим лягушатам
      попасть на их лилии. Помни, что это свойство CSS выравнивает элементы
      горизонтально и принимает следующие значения:
    </p>

    <ul>
      <li>
        <strong>flex-start</strong> Элементы выравниваются по левой стороне
        контейнера.
      </li>
      <li>
        <strong>flex-start</strong> Элементы выравниваются по левой стороне
        контейнера.
      </li>
      <li>
        <strong>flex-end</strong> Элементы выравниваются по левой стороне
        контейнера.
      </li>
      <li>
        <strong>center</strong> Элементы выравниваются по левой стороне
        контейнера.
      </li>
      <li>
        <strong>space-between</strong> Элементы выравниваются по левой стороне
        контейнера.
      </li>

      <li>
        <strong>space-around</strong> Элементы выравниваются по левой стороне
        контейнера.
      </li>
    </ul>
  </>,

  <>
    <p>
      Помоги всем трем лягушатам найти их лилии, просто используя
      <strong>justify-content.</strong>В этот раз, у лилий много пространства
      вокруг.
    </p>
    <p>
      Если ты чувствуешь, что забыл возможные значения свойства, ты можешь
      навести курсор на название свойства, чтоб посмотреть их. Попробуй навести
      курсор на
      <strong>justify-content</strong>
    </p>
  </>,

  <>
    <p>
      Теперь лилии по краям уплыли к берегам, увеличив пространство между ними.
      Используй
      <strong>justify-content.</strong>В этот раз, у лилий одинаковое расстояние
      между ними.
    </p>
  </>,

  <>
    <p>
      Теперь используй
      <strong>align-items.</strong>
      чтоб помочь лягушатам добратся к нижней части пруда. Это CSS свойство
      выравнивает элементы вертикально и принимает следующие значения:
    </p>
    <ul>
      <li>
        {" "}
        <strong>flex-start</strong> : Элементы выравниваются по верхнему краю
        контейнера
      </li>
      <li>
        <strong>flex-end</strong> : Элементы выравниваются по нижнему краю
        контейнера.
      </li>
      <li>
        {" "}
        <strong>center</strong> : Элементы выравниваются вертикально по центру
        контейнера.
      </li>
      <li>
        {" "}
        <strong>baseline</strong> : Элементы отображаются на базовой линии
        контейнера.
      </li>
      <li>
        <strong>stretch</strong> : Элементы растягиваются, чтоб заполнить
        контейнер.
      </li>
    </ul>
  </>,

  <>
    {" "}
    <p>
      Направь лягушонка в центр пруда, используя
      <strong>justify-content.</strong> и<strong>align-items.</strong> вместе.
    </p>
  </>,
  <>
    <p>
      Лягушатам снова нужно пересечь пруд. В этот раз к лилиям, с достаточно
      большим пространством вокруг них. Используй комбинацию
      <strong>justify-content.</strong> и<strong>align-items.</strong>
    </p>
  </>,

  // ---- level 8

  <>
    <p>
      Лягушатам нужно выстроиться в порядке их лилий, используя
      <strong>flex-direction.</strong>
      Это CSS свойство задает направление, в котором будут расположены элементы
      в контейнере, и принимает следующие значения:
    </p>

    <ul>
      <li>
        <strong>row</strong> : Элементы размещаются по направлению текста{" "}
      </li>
      <li>
        <strong>row-reverse'</strong> : элементы отображаются в обратном порядке
        к направлению текста.{" "}
      </li>
      <li>
        <strong>column</strong> : элементы располагаются сверху вниз.
      </li>
      <li>
        <strong>column-reverse</strong> : элементы располагаются снизу вверх.{" "}
      </li>
    </ul>
  </>,

  // ---  level 9 ---

  <>
    <p>
      Помоги лягушатам расположиться на своих лилиях используя
      <strong>flex-direction.</strong>
      Это CSS свойство задает направление, в котором будут расположены элементы
      в контейнере и принимает следующие значения:
    </p>

    <ul>
      <li>
        <strong>row</strong> : Элементы размещаются по направлению текста{" "}
      </li>
      <li>
        <strong>row-reverse'</strong> : элементы отображаются в обратном порядке
        к направлению текста.{" "}
      </li>
      <li>
        <strong>column</strong> : элементы располагаются сверху вниз.
      </li>
      <li>
        <strong>column-reverse</strong> : элементы располагаются снизу вверх.{" "}
      </li>
    </ul>
  </>,

  <>
    <p>
      Помоги лягушатам попасть на свои лилии. Хоть и кажется, что они почти на
      своих местах, все же придется применить и<strong>flex-direction</strong> и
      <strong>justify-content</strong>, чтоб поместить их на свои лилии.
    </p>

    <p>
      Заметь, что когда ты устанавливаешь направление в обратном порядке для
      ряда или колонки, начало (start) и конец (end) тоже меняются местами.
    </p>
  </>,

  <>
    <p>
      Помоги лягушатам найти их лилии с помощью
      <strong>flex-direction</strong> и<strong>justify-content</strong>.
    </p>

    <p>
      Заметь, когда в качестве направления выбрана колонка, то
      <strong>justify-content</strong> влияет на вертикальное выравнивание, а
      <strong>align-items</strong> на горизонтальное.
    </p>
  </>,
  <>
    <p>
      Помоги лягушатам найти их лилии с помощью <strong>flex-direction</strong>{" "}
      и<strong>justify-content</strong>.
    </p>
  </>,

  <>
    <p>
      Помоги лягушатам найти их лилии с помощью <strong>flex-direction</strong>,
      <strong>justify-content</strong> и<strong>align-items</strong>.
    </p>
  </>,

  <>
    <p>
      Иногда изменения порядка отображения элементов в контейнере недостаточно.
      В таких случаях мы можем применить свойство
      <strong>order</strong> для конкретных элементов. По умолчанию, зн,ачение
      этого свойства у элементов равно 0, но мы можем задать положительное или
      отрицательное целое число этому свойству.
    </p>

    <p>
      Используй свойство <strong>order</strong>, чтоб разместить лягушат на
      своих лилиях.
    </p>
  </>,
  <>
    <p>
      Используй свойство <strong>order</strong>, чтоб отправить красного
      лягушонка на его лилию.
    </p>
  </>,
  <>
    <p>
      Еще одно свойство, которое ты можешь применить к определенному элементу
      это
      <strong>align-self</strong>. Это свойство принимает те же значения, что и
      <strong>align-items</strong>.
    </p>
  </>,
];

export default instructions;
