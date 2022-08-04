import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VroomService {

  readonly BASE_URL = "http://solver.vroom-project.org/";
  public head = 
  {
    "vehicles": [

      {
        "id": 1,
        "start": [
          34.67133690934831, -1.9102545921302092
        ],
        "end": [
         34.67133690934831, -1.9102545921302092
        ],
        "capacity": [
          3
        ],
        "skills": [
          1,
          14
        ],
        "time_window": [
          1600416000,
          1600430400
        ]
      },
      {
        "id": 2,
        "start": [
          34.670827726714855, -1.911551793296241
        ],
        "end": [
          34.65680527655179, -1.9493675927675813
        ],
        "capacity": [
          2
        ],
        "skills": [
          2,
          14
        ],
        "time_window": [
          1600416000,
          1600430400
        ]
      }


    ],
    "jobs": [
      {
        "id": 1,
        "service": 300,
        "delivery": [
          1
        ],
        "location": [
          34.66534775343812, -1.9313341127687558
        ],
        "skills": [
          1
        ],
        "time_windows": [
          [
            1600419600,
            1600423200
          ]
        ]
      },
      {
        "id": 2,
        "service": 300,
        "pickup": [
          1
        ],
        "location": [
          34.66257296114617, -1.9464926711718713
        ],
        "skills": [
          1
        ]
      },
      {
        "id": 3,
        "service": 300,
        "delivery": [
          1
        ],
        "location": [
          34.64897755275518, -1.9343969644582126
        ],
        "skills": [
          14
        ]
      },
      {
        "id": 4,
        "service": 300,
        "delivery": [
          1
        ],
        "location": [
          34.65897755275518, -1.9443969644582126
        ],
        "skills": [
          14
        ]
      },
      {
        "id": 5,
        "service": 300,
        "delivery": [
          1
        ],
        "location": [
          34.655392132604916, -1.9152541938331182
        ],
        "skills": [
          14
        ]
      },
      {
        "id": 6,
        "service": 300,
        "delivery": [
          1
        ],
        "location": [
          34.65997755275518, -1.9343969644582126
        ],
        "skills": [
          14
        ]
      }
    ],
    "shipments": [
      {
        "amount": [
          1
        ],
        "skills": [
          2
        ],
        "pickup": {
          "id": 4,
          "service": 300,
          "location": [
            2.41808,
            49.22619
          ]
        },
        "delivery": {
          "id": 3,
          "service": 300,
          "location": [
            2.39719,
            49.07611
          ]
        }
      }
    ]
  }

  constructor(private http:HttpClient) {
  }

  getResult(): Observable<any[]> {
    return this.http.post<any[]>(this.BASE_URL,this.head);
  }
}
