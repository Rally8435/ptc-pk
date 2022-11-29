import React from "react";
import { Link } from "react-router-dom";

function MenuComponent() {
  return (
    <menu className="flex bg-[#d9d1e6]">
      <Link to='' title="" className="flex-1 text-center py-5">
        <img className="inline-block" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABUVJREFUeNrsW1trG0cUPivLkmXdLMuyLDmW7Rh8SVpkN9CGNhindd9aYoeQtyYWJc8hUPpqTOlLoIT8gigPpfQllqFPbcFyQwu9QGRCCE1xo8Rum4sd5F4UybaszlmPWl12rd3RrjKSdeAwuuzOzvftOWfO3ATQWT78Zn6CFKhBon1ER8vcEiMaJ7pMNHp5fDqqZ/sEHQC3kWKK6ClaaiERogtYEkISXBJA3/R5ojM6G1WY6FVCRIwLAijwWWrm1RR0jblKXUSo0NSvVOGNK7GIS6yuITCCR9++RrQN+BAEHyIkRHQngIC/xsFbl7UGQkJIFwKoyS8q6MZetGBwPKnUJYQ6A6+aBEEBeExebnHk72riQn85EgwK3vx8DYIH2uZFioGNgBozeykZpRjUE0CjfS2D/48EikV5DKD9/DzUl0xL5QmCjN/fr1G/Vx0UjRIXXuEdfPzGLUhv/ANmtxX6To+pCYqILSQbA+jAZob3V4ng80sVMkMxygbBWd7BH3X7Kq1iVpIAwszoCxjSqpJj3gCcO/JapdVM5FtBvgVc5Bn8273DcHbwFa2qO19AAI38XPq+xdgsvvXJwLCW1c7kMsRcLzDFI/AT3QPwhn9A/KyDIOZwjoBTvAD3W52ir6PqBBzyMIeZLMC5kYDmre2C3xzDI2yAbU4R6GFnB/isTr1BF1sAGIv7xbKROPoTBO49KPn9+NkLNZcaInaDmq4PEw8p8DUsE+gCQSVXPlr6BTbvPeYOgd1ohL92dlhvD6IF9Cm5kkfwKO/5A/Cm28N6e5+hHsb8w1Y781yBAQ64NAhoENAgoEFAzctXKyv6E2AbdHEJ/uOlJfhhba0iAhTttGgNOKBzspdLElrdzHO4MSQgruYh3w8FuALv6u8Bs4M5EYrjWGBZyXAYH4J6h3y+E+jaS4/v/wGJZZoin36/4Poz2QTYYBduH38Z1n3SqepQV7dYHnJ5oMNmh0HvIehp76gmf8tIQBRUzAajJSQ39tYWWtptYDCvw246U3LdQzDBEUiB62lCloCfH/1WUKK4bQ4Y7TkMkyNB8bPOEhXouDjLcndmaxt+X7wLyYd/lvznhR0IZTdg3e+Bm++MS96/k0rTerYgs50h31NinTl5fWAE3g2+WkLE1LkP/reiCyeY0V8enxZyM0IRYJgXbDI1g9ljlSTgMRhhE5pg1Sdv0sYWc0GJskuGttvJ55Da/Bu+W7kLsdVfRRLeGtF8zBbJ7wYXWGux9bpBMEr3pp++NAS3/ep82kDG9xhrnD0+sHraIbWbgc9/vAnhb7/WmoCFfAIirLWY7VYwd7ZK/pd+8hxMVgtzC002Kzi6vSIhaA0fffEZJLfS2lsAXTENs9SCbmDxSXdD6adJaG6xVNRKwWAQAy9aw+qzdfjkyxtagA/nVonzbfe6Hm6QUr+AuY81dMFa4pkW1V0tSYXpltMoqxs4jrqhyVK42o7fzS6LZk6L1mb3dYLJ1bJHCi3Vdn35+4yL9wfMAcMC6Z4bOEiPUBoLspDVNHLhs9qOeSupYk52MEStgCkWWFwO0V+LIzo2WGuR6j5V+H6BlUvtELlEc4I2tT6KWg1BN2CQBMW2/3CYRscQ1J+EpDZNGmRSxAirK3AqYbmd5PtulSVjBNwiW+vrBjECfox1Ruik0gkTXsFTDPKJVrkaanjfIPr7GHn78XJTYuWGjOIGwxqzBGxrfznwiiygyBIO5oGJIiIO5pGZIhLq5tAU08IIfVA/J7lCmPo705xG4+CkVq2hW20vQnWOzl7X6lB14/C03nbK+/H5fwUYAFHRmOEemc8PAAAAAElFTkSuQmCC" alt="" />
        <p className="text-sm text-[#222] mt-1">ประชาสัมพันธ์</p>
      </Link>
      <Link to='' title="" className="flex-1 text-center py-5">
        <img className="inline-block" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA/ZJREFUeNrsW09PE0EUf10LLQi0AWOw/NvEBI+udyPrySPwBdwe1DOJH8B+hF7FS3vzxvIFdPkG5aiJSVGREJVQTERIBN+rU7PgtjO7nWFnWV7yQkK2O/P7ze+9eTM7kzk9PQWVtrXq2PiH3EI30e9yfrKJ3kRvoHtzz+qeyv5lZBOAgIv4Z4n5oqTXrqO75EjIvpYEsJEuozug1uroVSSioQUBDHgFfQEu1jao3X5DJDIBTOrVCxhxEUWsRA2NSAQgeIrvGnoB9LAWhR+S4Ib9oREBPAFf0wg8sL6ssb6pUQCTvCcwjcVtNI3aoiFhXDLwwProsT73rwB8kcmKkgIkyygvmDwlGAIj7yYQfCcvcJXAC4GkyL5nOEQKAZZR+XN8NgdwD2fF8WkpPZ44OoDv3ivptQKGQllYAWyeFytwJIInG5m/DxP2U9kEOAwTnwAWM+LzqUTwikmoBeWDIAVUdUh6CkgoMGzdCWALm7hre5UkOAxjVwVUdEvjCkioBBKAzFgxLGnjIGHBrwK/AlZ0ntAlk1A+QwDLjg5obhJJcDozQkcBS0kp7SSS0MacVUXA+3cfuM8MDw/B9EzpzP9+/fgG+dEbXBLI+qwY25s6HQUs6jLCX/d34WBvR0gJxQdP+mmqjTnTfPmYMuLbyK959Fw6CScnJ/Dp4zYcHR1zn51vuv009ZAUYOsW54ZhwMzsFIyMXlfdlE0EWDomOyKhVJqEscKoymYsSoKmijeLJEFRa+23oFBUsjwxjSRseBD4yVs3lWyYZFV1ev7ObenvzGaz8GV7B5OkvO+ZBiTI/tYNU5gfMukkgCyfz8GcOQu53KAcVanqqMwkeD6kBgay7WmSaoXUKcA/Tc6ZM/oqQEUSVEIkpNyIgM0U49+kEGiqKIZUJkGJ1iQFNFKsgAYpwEN/kdIk6Bmqz+HpbIS9MwuspxD/ur8OoG0VqdtiCUiCrr8OcFOoAPefAugYydaqQ+ftHI1HTKbVO0dn/JVgLUWjX/2vFGazwUYKwG/4zxlr/3VYgVW6LoaYCuqXGHz9fN0TtBqkr8StxEAaGhN9sgUBX8CNgOqIsmNZ9K2Hu1uxYW+3fXgg+ng56NCk0aVEdEVDYfvN61hIoDap7RDSD6x1eh6VxdqgwVsqf947hJ/Hv2NRwPDgNZgeH+Ku+RG81WtDpJfZvA2TUjHf7kgc4KltHnjgfPsUOSxdZJsmSTwsbeHoN3s9xN0TZInDhGRtnVFfTR54IQJ8JNgJISHUhYnQd4aED1HHV+iUw/wg9LY4a2BZs2KJ+rIcFnwkAnx1gqlJ2Vxn8R5pT+Pq4qTEq7MWq7Uv4upsTdZm7tXl6bRfn/8jwACwxHFIdNjybgAAAABJRU5ErkJggg==" alt="" />
        <p className="text-sm text-[#222] mt-1">ข่าวงานกิจกรรม</p>
      </Link>
      <Link to='' title="" className="flex-1 text-center py-5">
        <img className="inline-block" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABFtJREFUeNrsWz1oE2EYflNTiSJNW9S2xuFEBTslLlJcGruoODSOIrWFTg5iF8FBMaBOLhUHJzU1FJ00HURxqNdBcExAUFFoBn/q0iY1amIr8XvP78Llej/f3eXuviR94CN/l7v3fb7nfb//QLVaBTfxZmwsTl6wxEgRSIma/CVHSp6ULCniUDotumlfoNEEEIe7yUuCltEG3XaOlAwWQkiBSwJoTU+QMg7uYoaUaUJElgsCqONJUobBWyzgc52GiG0CqNSnPahxFkVM2Q0NWwQQ5zG+U6SEgQ8UMfwICRnXCSDOpziodV01EBImXCGASl5kaMb8BjajcdaQYCKgiZy3TIIpAcR5gXZKwtBcwLwgmJHQwVDzmSZ0HqjNIvXBHgFNJnstRKkP1kPAKNuHBg9C16kR2NLdxYWXfwursPpsHsrvPlpuHTQJoO38Uz3ne84muKzuldmMEQmntfoJHTpxn9K7C9Y8rzCxLaWVD7RywLRR0uNF9jZsC1Pf6hDUGNhY6uVdvPrQV6dvXz9n5fJxzG3KAZRaAUlofSQ1Q4AwE/NhSOsHhqnSNyhgCtoHE3XNIM2OKyz/HLhxiWvPvl25xXppD3aTZQUkoP2QUIZA2xMw2oYESD4HlRnRDqz2A9TttvL/Ftt0x0DfsSMU56lanBJqERIBMTccOTkShRPH/o+kX7zKwfP5nBcOWUUMCRDcuLPsvPyelQCPFSAE/Z7wUDvgsQKiHW7dGWWv9Z43BBtxk22hrRA/Olj7/Lv8R5I8i+ydjiadKqYhBFyYPA6R/p667yL9vTD75DVEBnolgpZXSrBcKPmd9NwhQO084sjh/dDbswMOCH01VVy++bg1FaAH2Xk5TDho9rwlwI1mj0sFOHGCBwXknPQFnDrgswJySEDez86QzwrIY0coC+2LLCpAJOUaD6O3T4tLcOf+Sy8VJMpzgszbRFpoThCG0umA3ArMgc1ZoUZOiHicQ+aUzWDGLgFOk5iPSTCjJuBBmylAIqC2PM66+6tFckBtv4CyJ8hEwNraOnR2BrlUANrGiNoqcd0GCaICbBIN1wer58dgT6Sfy9r/+mUJAnfTZpctkNqPyx8srw5XKhXpQRbYdh1oC9qEtjEgqTsYwnVzooIZo1DYtXun9LBS6Sd3CkBl/jCPfVH5hdacIK4SF/Xu0PlnTXqQMg/4DbRFsonYZoAiaKyAW94kVdy3Fw5NnuEyB7y/9wjCi5/1fmbbJEVDAS+c0fpt9e0H6UGV5QI3jqMtaBPaZiB9zZ3khltliRKy6qHyr/V1+F4uc6mAvlAItgc3hGaOOK+7+mW2LhCnEyY14APwQcFAgBvH0RY958Fk7ZNls3Q3nTRpxs3SMVL7eaOLTFeG6G5rQa0EzoG2CmbOMylApQQR2vHAhIoIpjGDT3DvyIxGPyEFLXBoytbqMH2QoNdX8LrWabxn7Px58+BkA4/Oxmhf24ujs6lGHarePDzd7sfn/wkwAI2H/Wokp1ArAAAAAElFTkSuQmCC" alt="" />
        <p className="text-sm text-[#222] mt-1">จดหมายข่าว</p>
      </Link>
      <Link to='' title="" className="flex-1 text-center py-5">
        <img className="inline-block" src="data:image/png;base64,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" alt="" />
        <p className="text-sm text-[#222] mt-1">รูปกิจกรรม</p>
      </Link>
      <Link to='' title="" className="flex-1 text-center py-5">
        <img className="inline-block" src="data:image/png;base64,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" alt="" />
        <p className="text-sm text-[#222] mt-1">วิดีโอแนะนำวิทยาลัยฯ</p>
      </Link>
      <Link to='' title="" className="flex-1 text-center py-5">
        <img className="inline-block" src="data:image/png;base64,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" alt="" />
        <p className="text-sm text-[#222] mt-1">ติดต่อสอบถาม</p>
      </Link>
    </menu>
  )
}

export default MenuComponent
